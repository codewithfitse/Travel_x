import express from "express";
import UserBook from "../models/userBook.js";
import UserDemo from "../models/UserDemo.js";
import UserOneDay from "../models/UserOneDayBooking.js";
import authMiddleware from "../middleware/tokenMiddleware.js";
import UserPostOne from "../models/UserPostOne.js";
import UserTransaction from "../models/UserTransaction.js";

const router = express.Router();

// I make this to list all booking for one day!
router.get("/OneDayVehiclesBook", async (req, res) => {
  const data = await UserOneDay.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

router.get("/OneDayVehiclesBookUser", authMiddleware, async (req, res) => {
  const id = req.user.id;
  const data = await UserOneDay.find({ userId: id }).sort({ createdAt: -1 });
  res.json(data);
  console.log(data);
});

router.post("/OneDayVehiclesBook", authMiddleware, async (req, res) => {
  const {
    url,
    name,
    transactionId,
    amount,
    price,
    item,
    model,
    phone,
    destination,
    message,
    date,
    _id,
  } = req.body;
  const { id, firstName, email } = req.user;

  if (
    !transactionId ||
    !amount ||
    !price ||
    !item ||
    !model ||
    !phone ||
    !destination ||
    !message ||
    !date
  ) {
    return res.status(400).json({ error: "All fields must be filed" });
  }

  try {
    const Transaction = await UserOneDay.find({ transactionId: transactionId });

    if (Transaction === transactionId) {
      return res
        .status(403)
        .json({ error: "Something Wrong you must Been booked before" });
    }

    await UserOneDay.create({
      vehicleId: _id,
      userId: id,
      transactionId,
      amount,
      data: {
        url,
        ownerName: name,
        customName: firstName,
        price,
        item,
        model,
        date,
        email,
        phone,
        destination,
        message,
      },
    });

    await UserTransaction.create({ transactionId, amount });

    //const stat = UserOneDay.findById({ _id });

    // Step 3: If success, reduce quantity
    if (transactionId === "12345") {
      const car = await UserPostOne.findById(_id);

      const stat = UserOneDay.find({});

      if (car) {
        car.quantity = Math.max(0, car.quantity - 1); // never negative
        await car.save();
        console.log("✅ Quantity updated for vehicle:", car._id);
      } else {
        console.warn("⚠️ No linked car found with ID:", booking.vehicleId);
      }
    }

    return res.status(200).json({ message: "Successfully Booked" });
  } catch (error) {
    res.json(error);
  }

  console.log(`Posted Successfully.`);
});

router.get("/OneDayVehiclesBook/:status", authMiddleware, async (req, res) => {
  const { status } = req.params;
  //const userId = req.user.idg;
  const data = await UserOneDay.find({ status: status }).sort({
    createdAt: -1,
  });
  res.json(data);
  console.log(data);
});

// Specific booking
router.get("/OneDayVehiclesBook/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserOneDay.find({ _id: id });
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
router.patch("/OneDayVehiclesBook/:id", async (req, res) => {
  const { id } = req.params;
  const { stat } = req.body;

  try {
    // Step 1: Find the booking
    const booking = await UserOneDay.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Step 2: Update booking status
    booking.status = stat;
    await booking.save();

    // Step 3: If success, reduce quantity
    if (stat.toLowerCase() === "successful") {
      const car = await UserPostOne.findById(booking.vehicleId);

      if (car) {
        car.quantity = Math.max(0, car.quantity - 1); // never negative
        await car.save();
        console.log("✅ Quantity updated for vehicle:", car._id);
      } else {
        console.warn("⚠️ No linked car found with ID:", booking.vehicleId);
      }
    }

    res.json({ message: "Booking status updated", booking });
  } catch (err) {
    console.error("❌ Failed to update booking:", err);
    res.status(500).json({ message: "Error", error: err.message });
  }
});

// to delete booking from databse!
router.delete("/OneDayVehiclesBook/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserOneDay.findByIdAndDelete(id);
    res.json(data);
    console.log("Deleted bookings:", data);
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: err.message });
  }
});

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

// i made this b/c to list all bookings.
router.get("/demos", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const data = await UserDemo.find({}).sort({ createdAt: -1 });
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
  const { fullName, email, phone, item, destination, date } = req.body;
  // this conatines mongoDb id and it will save user info in booking that will have acces to only user access!
  const userId = req.user.id;
  UserDemo.create({
    fullName,
    email,
    phone,
    item,
    destination,
    userId: userId,
    date,
  })
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
