import express from "express";
import {cloudinary} from "../config/Cloudinary.js";
import UserPost from "../models/UserPost.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/uploads", async (req, res) => {
  try {
    const images = await UserPost.find({}).sort({
      uploadedAt: -1,
    });
    console.log("Here is work product!");

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/suv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "suv" }).sort({
      uploadedAt: -1,
    });
    console.log("Here is work product!");

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/midsuv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "midsuv" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/fullsuv", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "fullsuv" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/minivan", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "minivan" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/pickup", async (req, res) => {
  try {
    const images = await UserPost.find({ item: "pickup" }).sort({
      uploadedAt: -1,
    });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.post("/uploads", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    const newImage = new Image({
      url: result.secure_url,
      public_id: result.public_id,
    });

    await newImage.save();
    fs.unlinkSync(req.file.path); // cleanup

    res.json(req.file);
    console.log(req.file);
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/upload", upload.single("photo"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const { name, item, description } = req.body;

  const fileUrl = `/uploads/${req.file.filename}`;

  // Save to MongoDB
  const image = new UserPost({
    filename: req.file.filename,
    url: fileUrl,
    name,
    item,
    description,
  });

  try {
    await image.save();
    res.json({ message: "Uploaded and saved to DB", image });
  } catch (err) {
    res.status(500).json({ error: "Failed to save in DB" });
  }
});

router.put("/api/images/:id", async (req, res) => {
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

router.delete("/api/images/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await UserPost.findByIdAndDelete(id);
    res.json({ message: "Deleted and saved to DB" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete in DB" });
  }
});

export default router;
