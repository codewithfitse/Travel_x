import express from "express";
import UserBook from "../models/userBook.js";
import multer from "multer";

const router = express.Router();

router.post("/book", (req, res) => {
  UserBook.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

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
