import express from "express";
import UserBook from "../models/userBook.js";

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

export default router;
