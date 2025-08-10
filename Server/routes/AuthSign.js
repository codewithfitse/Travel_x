import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserLogin from "../models/UserDb.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const existingUser = await UserLogin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const Hash = await bcrypt.hash(password, 10);

    const user = await UserLogin.create({
      firstName,
      lastName,
      email,
      phone,
      password: Hash,
    });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ token, user: { ...user.toObject(), password: undefined } });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user
    const user = await UserLogin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      secure: true, // HTTPS only in prod
      sameSite: "none",
      path: "/",
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });

    return res.status(200).json({
      message: "Success",
      user: {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isSubAdmin: user.isSubAdmin,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

router.post("/logout", (req, res) => {
  try {
    req.session?.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
    });
          
    // Clear cookies
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, // ✅ must match login
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });

    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: "travel-x-408k.onrender.com",
      path: "/",
    });

    return res.status(200).json({ message: "Logged out" }); // ✅
  } catch (err) {
    return res.status(500).json({ message: "Logout failed" }); // 💥
  }
});

export default router;
