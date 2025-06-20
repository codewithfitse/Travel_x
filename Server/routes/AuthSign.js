import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserLogin from "../models/UserDb.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import UserOauth from "../models/UserOauth.js";
import MongoStore from "connect-mongo";

const router = express.Router();
router.use(cookieParser());

const MONGO_DB = process.env.MONGO_URI;

const ClientId =
  "849375548974-gil8qk4hvm3ie3hicrbtr6drs7po4667.apps.googleusercontent.com";
const ClientSecret = "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";
const callBack = "https://travel-x-408k.onrender.com/auth/google/profile";

router.use(passport.initialize());
router.use(passport.session());

router.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_DB }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "None",      
      secure: true, // true in production with HTTPS
    },
  })
);

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

router.get("/api/google", (req, res) => {
  res.send("<a href='/api/google'>Google</a>");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/profile", passport.authenticate("google", {
  failureRedirect: "/Login",
  session: true,
}), (req, res) => {
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

    return res.redirect("https://travel-x-kappa.vercel.app/Login");
  });
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Login required" });
}

router.get("/profile", (req, res) => {
  res.status(200).json({ message: "Welcome Admin", user: req.user });
});

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const existingUser = await UserLogin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const Hash = await bcrypt.hash(password, 10);

    const user = await UserLogin.create({
      firstName,
      lastName,
      email,
      phone,
      password: Hash,
    });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ token, user: { ...user.toObject(), password: undefined } });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
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

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      secure: true, // HTTPS only in prod
      sameSite: "none",
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

router.post("/logout", (req, res) => {
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
      secure: true, // ✅ must match login
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });

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

export default router;
