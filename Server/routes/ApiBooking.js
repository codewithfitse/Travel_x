import express from "express";
import UserBook from "../models/userBook.js";
import UserDemo from "../models/UserDemo.js";
import authMiddleware from "../middleware/tokenMiddleware.js";

const router = express.Router();

// I make this to list all booking 
router.get("/booking", async (req, res) => {
  const data = await UserBook.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

// I make this to post booking to mongoDb
router.post("/book", (req, res) => {
  UserBook.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

// I make this to get booking list by id  
router.get("/booking/:id", async (req, res) => {
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

// I make this to delete booking list by id 
router.delete("/booking/:id", async (req, res) => {
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


router.get("/demos", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ }).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

router.get("/demo", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ userId }).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

router.post("/demo", authMiddleware, (req, res) => {
  const { fullName, email, phone, item, destination } = req.body;
  const userId = req.user.id;
  UserDemo.create({ fullName, email, phone, item, destination, userId: userId })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

router.get("/demo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserDemo.find({ _id: id });
    res.json(data);
    console.log("Sorted Demo:", data);
  } catch (err) {
    console.error("Failed to fetch Demo:", err);
    res
      .status(500)
      .json({ message: "Error fetching Demo", error: err.message });
  }
});

router.patch("/demo/:id", async (req, res) => {
  const { id } = req.params;
  const { stat } = req.body;
  try {
    const data = await UserDemo.findByIdAndUpdate(id, { status: stat });
    res.json(data);
    console.log("Deleted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

router.delete("/demo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserDemo.findByIdAndDelete(id);
    res.json(data);
    console.log("Deleted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

export default router;
