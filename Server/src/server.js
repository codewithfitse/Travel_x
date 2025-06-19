import express from "express";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import multer from "multer";
import fs from 'fs';
import { cloudinary, storage } from "../config/Cloudinary.js";
import UserLogin from "../models/usersDb.js";
import UserContact from "../models/usersContact.js";
import UserBook from "../models/userBook.js";
import UserPost from "../models/UserPost.js";
import Vehicles from "../routes/AuthVehicles.js";
import authSign from "../routes/AuthSign.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import UserOauth from "../models/UserOauth.js";

const app = express();
app.use(
  cors({
    origin: ["https://travel-x-kappa.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", Vehicles);
app.use("/auth", authSign);
const PORT = 3000;

const MONGO_DB = process.env.MONGO_URI;

mongoose
  .connect(MONGO_DB)
  .then(() => console.log(`Connected Successfully`))
  .catch((err) => console.log(`Err:`, err));
app.set('trust proxy', 1); // for secure cookies to work behind a proxy (like Render)

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
      secure: true, // true in production with HTTPS
    },
  })
);

const ClientId =
  "849375548974-gil8qk4hvm3ie3hicrbtr6drs7po4667.apps.googleusercontent.com";
const ClientSecret = "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";
const callBack = "https://travel-x-408k.onrender.com/api/google/profile";

app.use(passport.initialize());
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

app.get("/google", (req, res) => {
  res.send("<a href='/auth/google'>Google</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/api/google/profile", passport.authenticate("google", {
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

app.get("/profile", (req, res) => {
  res.status(200).json({ message: "Welcome Admin", user: req.user });
});

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const upload = multer({ storage: storage })

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

app.get("/uploads", async (req, res) => {
  try {
    const images = await UserPost.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch images", error: err.message });
  }
});

app.get("/uploads/suv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "suv" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.get("/uploads/midsuv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "midsuv" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.get("/uploads/fullsuv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "fullsuv" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});
app.get("/uploads/minivan", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "minivan" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.get("/uploads/pickup", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "pickup" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.post("/uploads", upload.single('image'), async (req, res) => {
  const { name, item, price } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // req.file now contains Cloudinary info
    const savedPost = new UserPost({
      name,
      item,
      price,
      url: req.file.path, // already the Cloudinary URL
      public_id: req.file.filename, // this is the Cloudinary ID
    });

    await savedPost.save();

    console.log("✅ Uploaded to Cloudinary via Multer:", req.file.path);

    res.status(200).json({
      msg: "Uploaded and saved to DB!",
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.error("❌ Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
})

// Update route - Update image and/or text
app.put("/uploads/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, item, price } = req.body;

    const post = await UserPost.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // If there's a new image uploaded, delete old image from Cloudinary and upload new one
    if (req.file) {
      // Delete old image from Cloudinary
      await cloudinary.uploader.destroy(post.public_id);

      // Update with new image info
      post.url = req.file.path;
      post.public_id = req.file.filename;
    }

    // Update other fields
    post.name = name || post.name;
    post.item = item || post.item;
    post.price = price || post.price;

    await post.save();

    res.json({ message: 'Post updated successfully', data: post });
  } catch (error) {
    console.error('PUT update error:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }

});

app.delete("/uploads/:id", async (req, res) => {
  try {
    const post = await UserPost.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(post.public_id);

    // Delete from MongoDB
    await UserPost.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted from Cloudinary and DB" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete image" });
  }
});

app.get("/api/images", async (req, res) => {
  try {
    const images = await UserPost.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.put("/api/images/:id", async (req, res) => {
  const { id } = req.params;
  const { name, item, description } = req.body;

  try {
    const updatedPost = await UserPost.findByIdAndUpdate(
      id,
      { name, item, description },
      { new: true } // return the updated document
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Updated and saved to DB", data: updatedPost });
  } catch (err) {
    console.error("Update error:", err); // Add this for better debugging
    res.status(500).json({ error: "Failed to update in DB" });
  }
});

app.delete("/api/images/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await UserPost.findByIdAndDelete(id);
    res.json({ message: "Deleted and saved to DB" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete in DB" });
  }
});

app.get("/", (req, res) => {
  res.json("HomePage");
  console.log(`We are on Homepage`);
});

app.get("/register", (req, res) => {
  res.json("register");
  console.log(`We are on register`);
});

app.get("/login", (req, res) => {
  res.json("Login");
  console.log(`We are on Login`);
});

app.get("/dashboard", async (req, res) => {
  const data = await UserLogin.find({});
  res.json(data);
  console.log(`We are on Dashboard`);
});

app.get("/dashboards", authMiddleware, async (req, res) => {
  const data = await UserLogin.find(
    { email: req.user.email },
    { password: false }
  );
  res.json(data);
  console.log(data);
});

app.get("/dashboard/admin", async (req, res) => {
  const data = await UserLogin.find({ email: "user1234@gmail.com" });
  res.json(data);
  console.log(data);
});

app.get("/dashboard/contact", async (req, res) => {
  const data = await UserContact.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

app.get("/dashboard/booking", async (req, res) => {
  const data = await UserBook.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

app.put("/dashboard/:id", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const Hash = await bcrypt.hash(password, 10);
  try {
    const updatedUser = await UserLogin.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, phone, password: Hash },
      { new: true } // returns the updated doc
    );
    res.status(200).json(updatedUser);
    console.log(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

app.delete("/dashboard/:id", async (req, res) => {
  try {
    const deletedUser = await UserLogin.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const Hash = await bcrypt.hash(password, 10);

  UserLogin.create({ firstName, lastName, email, phone, password: Hash })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
});

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
      secure: true, // ✅ must match login
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });

    return res.status(200).json({ message: "Logged out" }); // ✅
  } catch (err) {
    return res.status(500).json({ message: "Logout failed" }); // 💥
  }
});

app.post("/contact", (req, res) => {
  UserContact.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

app.get("/dashboard/contact/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserContact.find({ _id: id });
    res.json(data);
    console.log("Sorted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

app.delete("/dashboard/contact/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserContact.findByIdAndDelete(id);
    res.json(data);
    console.log("Deleted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

app.post("/book", (req, res) => {
  UserBook.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

app.get("/dashboard/booking/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserBook.find({ _id: id });
    res.json(data);
    console.log("Sorted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

app.delete("/dashboard/booking/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserBook.findByIdAndDelete(id);
    res.json(data);
    console.log("Deleted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
