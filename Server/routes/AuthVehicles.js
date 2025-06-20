import express from "express";
import { cloudinary, storage } from "../config/Cloudinary.js";
import UserPost from "../models/UserPost.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ storage: storage })

// I make this to list All Photos from Cloudinarey! 
router.get("/", async (req, res) => {
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

// I make this to list of suv Photos from Cloudinarey! 
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

// I make this to list of Midsuv Photos from Cloudinarey!
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

// I make this to list of Fullsuv Photos from Cloudinarey!
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

// I make this to list of Minisuv Photos from Cloudinarey!
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

// I make this to list of Picksuv Photos from Cloudinarey!
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

// I make this Post to upload to cloudeary cloud storage!
router.post("/", upload.single('image'), async (req, res) => {
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
      url: req.file.path, // already the Cloudinary URL, user to feach image to frontend!
      public_id: req.file.filename, // this is the Cloudinary ID , userd to update and delete from cloudnarey
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
router.put("/:id", upload.single("image"), async (req, res) => {
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

// I make this to delete Photos from Cloudinarey and database too!
router.delete("/:id", async (req, res) => {
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

export default router;
