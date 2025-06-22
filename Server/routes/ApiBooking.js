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

// i made this b/c to list all bookings
router.get("/demos", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ }).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});


router.get("/demosPen", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ status: "pending" }).sort({
    createdAt: -1,
  });
  res.json(data);
  console.log(data);
});

router.get("/demosSuc", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ status: "successful" }).sort({
    createdAt: -1,
  });
  res.json(data);
  console.log(data);
});

router.get("/demosCan", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({ status: "canceled" }).sort({
    createdAt: -1,
  });
  res.json(data);
  console.log(data);
});

// i made this b/c to list all bookings the user have
router.get("/demo", authMiddleware, async (req, res) => {
  // this is cookie that hold user info mongodb id.
  const userId = req.user.id;
  const data = await UserDemo.find({ userId }).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

// This one i use to separet users on there own.
router.post("/demo", authMiddleware, (req, res) => {
  const { fullName, email, phone, item, destination } = req.body;
  // this conatines mongoDb id and it will save user info in booking that will have acces to only user access!
  const userId = req.user.id;
  UserDemo.create({ fullName, email, phone, item, destination, userId: userId })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

// Specific booking 
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

// i use patch to edit status of booking!
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

// to delete booking from databse!
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
