import express from "express";
import mongoose from "mongoose";
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
  const {name, item, price} = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads", // Optional
    });
    const savedImage = new UserPost({ name, item, price, url: result.secure_url });
    await savedImage.save();
    console.log("Posted", req.file);
    res.status(200).json({
      msg: "Uploaded and saved to DB!",
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.log(error);
    
  }
})

// Update route - Update image and/or text
app.put("/uploads/:id", upload.single("image"), async (req, res) => {
  const { name, item, price } = req.body;
  const postId = req.params.id;

  try {
    const existingPost = await UserPost.findById(postId);
    if (!existingPost) return res.status(404).json({ msg: "Post not found" });

    // If there's a new image, delete old one from Cloudinary
    let updatedData = { name, item, price };
    if (req.file) {
      await cloudinary.uploader.destroy(existingPost._id);
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "uploads"
      });
      updatedData.url = result.secure_url;
      updatedData._id = result._id;
    }

    const updatedPost = await UserPost.findByIdAndUpdate(postId, updatedData, { new: true });
    res.status(200).json({ msg: "Post updated!", updatedPost });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Update failed", error: err.message });
  }
});

app.delete("/uploads/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Step 1: Find the image document in MongoDB
    const imageDoc = await UserPost.findById(id);
    if (!imageDoc) {
      return res.status(404).json({ msg: "Image not found" });
    }

    // Step 2: Extract public_id from Cloudinary URL
    // Example URL: https://res.cloudinary.com/demo/image/upload/v1234567890/upload/filename.jpg
    const urlParts = imageDoc.url.split("/");
    const publicIdWithExt = urlParts[urlParts.length - 1]; // filename.jpg
    const publicId = `upload/${publicIdWithExt.split(".")[0]}`; // upload/filename

    // Step 3: Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Step 4: Delete from MongoDB
    await UserPost.findByIdAndDelete(id);

    res.status(200).json({ msg: "Image deleted from DB and Cloudinary" });
  } catch (error) {
    console.error("❌ Delete failed:", error);
    res.status(500).json({ msg: "Failed to delete image", error: error.message });
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
  const data = await UserContact.find({});
  res.json(data);
  console.log(data);
});

app.get("/dashboard/booking", async (req, res) => {
  const data = await UserBook.find({});
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
  // const isValid = bcrypt.compare(password);

  try {
    const user = await UserLogin.findOne({ email: email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    
    if (!isMatch) {
        res.status(401).json({
        message: "Incorrect password",
      });
    }

      user.lastLogin = new Date();
      await user.save();
    
    return res.status(200).json({
      message: "Success",
      user: {
        username: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.log("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }

  console.log(`Posted Successfully`);
});

app.post("/logout", (req, res) => {
  try {
    // Clear cookies
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "None",
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

app.post("/book", (req, res) => {
  UserBook.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
