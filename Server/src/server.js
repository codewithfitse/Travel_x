import express from "express";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import UserLogin from "../models/UserDb.js";
import UserInfo from "../routes/ApiUser.js";
import Booking from "../routes/ApiBooking.js";
import Contact from "../routes/ApiContact.js";
import Vehicles from "../routes/AuthVehicles.js";
import authSign from "../routes/AuthSign.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import UserOauth from "../models/UserOauth.js";
import fetch from "node-fetch"; // If using ESM
// const fetch = require('node-fetch'); // If using CommonJS

const RENDER_URL = "https://travel-x-408k.onrender.com";

setInterval(() => {
  fetch(RENDER_URL)
    .then((res) =>
      console.log(`[PING] ${new Date().toISOString()} - ${res.status}`)
    )
    .catch((err) => console.error("[PING ERROR]", err));
}, 5 * 60 * 1000); // Ping every 5 minutes

const app = express();
app.use(
  cors({
    origin: ["https://travel-x-kappa.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const MONGO_DB = process.env.MONGO_URI;

mongoose
  .connect(MONGO_DB)
  .then(() => console.log(`Connected Successfully`))
  .catch((err) => console.log(`Err:`, err));

app.set("trust proxy", 1); // for secure cookies to work behind a proxy (like Render)

// this session used for soring on mongoDb session storage!
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_DB }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "None",
      secure: true,
    },
  })
);

const ClientId =
  "849375548974-97jotmu60nhgei3hlv7f41fumieevmhj.apps.googleusercontent.com";
const ClientSecret = "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";
const callBack = "https://travel-x-408k.onrender.com/auths/google/profile";

app.use(passport.initialize()); // as i understood this will instialize passport for use!
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: ClientId,
      clientSecret: ClientSecret,
      callbackURL: callBack,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await UserOauth.findOne({ googleId: profile.id });
        if (user) return done(null, user);

        user = await UserOauth.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value,
          avatar: profile.photos?.[0].value,
        });

        return done(null, user);
      } catch (err) {
        console.error("Error in Google Strategy", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserOauth.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

//I make this to login with Oauth with Google to direte me google Oauth box!
app.get(
  "/auths/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// yes i this will pay the big Part on Oauth it diffrenciate the routes admin, subAdmin,user and rediret you based on session data best ever i bulid fr!
app.get(
  "/auths/google/profile",
  passport.authenticate("google", {
    failureRedirect: "/Login",
    session: true,
  }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/Login");
    }

    req.session.save(() => {
      const { _id, isAdmin, isSubAdmin } = req.user;

      console.log("✅ Logged in user:", req.user);
      console.log("💾 Session:", req.session);

      if (isAdmin || isSubAdmin) {
        return res.redirect("https://travel-x-kappa.vercel.app/Admin");
      }

      return res.redirect("https://travel-x-kappa.vercel.app/UserDashboard");
    });
  }
);

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Login required" });
}

// i create this b/c i want too make simlify for user profile data after all the login is done and to feach it frontend!
app.get("/profile", (req, res) => {
  res.status(200).json({ message: "Welcome Admin", user: req.user });
});

// i been too creative about this idea i want to make it it used to to autheticate if cooki of tooken is present!
function authMiddleware(req, res, next) {
  const token = req.cookies.token; // 👈 get the token from the cookie

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = decodedUser; // 🎯 attach the user info to request
    next();
  });
}

// my first Page 😊 proud of it!
app.get("/", (req, res) => {
  res.json("HomePage");
  console.log(`We are on Homepage`);
});

// this will feached if the middle ware is correct means if the cookie is present!
app.get("/dashboards", authMiddleware, async (req, res) => {
  const data = await UserLogin.find(
    { email: req.user.email },
    { password: false }
  );
  res.json(data);
  console.log(data);
});

// this is for new user.
app.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  // this will increapt the password! bye hacker it takes time days...
  const Hash = await bcrypt.hash(password, 10);

  UserLogin.create({ firstName, lastName, email, phone, password: Hash })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
});

// this is the login part
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user
    const user = await UserLogin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Update last login timestamp really usefull make this app cool!
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // this will setup the cookie of named token!
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });

    return res.status(200).json({
      message: "Success",
      user: {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

// logout part was easy i simplay remover cookie and session!
app.post("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
    });

    // Clear cookies
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });
    // clear the Oauth Session!
    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });

    return res.status(200).json({ message: "Logged out" }); // ✅
  } catch (err) {
    return res.status(500).json({ message: "Logout failed" }); // 💥
  }
});

app.use("/uploads", Vehicles);
app.use("/dashboard", Booking);
app.use("/dashboard", Contact);
app.use("/dashboard", UserInfo);
app.use("/auths", authSign);

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
