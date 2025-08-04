import express from "express";
import UserContact from "../models/UserContact.js";

const router = express.Router();

// I make this to list all Conatcts 
router.get("/contact", async (req, res) => {
  const data = await UserContact.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

// I make this to post Contacts to mongoDb
router.post("/contact", (req, res) => {
  UserContact.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

// I make this to get Contacts list by id  
router.get("/contact/:id", async (req, res) => {
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

// I make this to delete Contacts list by id 
router.delete("/contact/:id", async (req, res) => {
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

export default router;
