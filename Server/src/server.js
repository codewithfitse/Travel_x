import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import multer from "multer";
import fs from 'fs';
import { cloudinary, storage } from "../config/Cloudinary.js";
import UserLogin from "../models/usersDb.js";
import UserContact from "../models/usersContact.js";
import UserBook from "../models/userBook.js";
import UserPost from "../models/UserPost.js";

const app = express();
app.use(
  cors({
    origin: ["https://travel-x-kappa.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

const MONGO_DB = "mongodb+srv://user:user123@cluster0.ooin5ux.mongodb.net/User";

mongoose
  .connect(MONGO_DB)
  .then(() => console.log(`Connected Successfully`))
  .catch((err) => console.log(`Err:`, err));

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const upload = multer({ storage: storage })

app.get("/uploads", async (req, res) => {
  try {
    const images = await UserPost.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch images", error: err.message });
  }
});

app.post("/uploads", upload.single('image'), async (req, res) => {
  const {name, item, price} = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads", // Optional
    });
    const savedImage = new UserPost({ name, item, price ,url: result.secure_url });
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
