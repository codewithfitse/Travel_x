import express from "express";
import UserLogin from "../models/UserDb.js";
import UserOauth from "../models/UserOauth.js";

const router = express.Router();

router.get("/user", async (req, res) => {
  const data = await UserLogin.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(`We are on Dashboard`);
});

router.get("/userGoogle", async (req, res) => {
  const data = await UserOauth.find({}).sort({ createdAt: -1 });
  res.json(data);
  console.log(`We are on Dashboard`);
});

router.put("/user/:id", async (req, res) => {
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

router.delete("/user/:id", async (req, res) => {
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

export default router;
