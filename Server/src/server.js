import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import UserLogin from "../models/usersDb.js";
import UserContact from "../models/usersContact.js";
import UserBook from "../models/userBook.js";

const app = express();
app.use(
  cors({
    origin: ["https://travel-x-kappa.vercel.app", "http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = 3000;

const MONGO_DB = "mongodb+srv://user:user123@cluster0.ooin5ux.mongodb.net/User";

mongoose
  .connect(MONGO_DB)
  .then(() => console.log(`Connected Successfully`))
  .catch((err) => console.log(`Err:`, err));

app.get("/", (req, res) => {
  res.json("HomePage");
  console.log(`We are on Homepage`);
});

app.get("/register", (req, res) => {
  res.json("register");
  console.log(`We are on register`);
});
app.get("/login", (req, res) => {
  res.json("Login");
  console.log(`We are on Login`);
});

app.get("/dashboard", async (req, res) => {
  const data = await UserLogin.find({});
  res.json(data);
  console.log(`We are on Dashboard`);
});

app.get("/dashboard/admin", async (req, res) => {
  const data = await UserLogin.find({ email: "user1234@gmail.com" });
  res.json(data);
  console.log(data);
});

app.get("/dashboard/contact", async (req, res) => {
  const data = await UserContact.find({});
  res.json(data);
  console.log(data);
});

app.get("/dashboard/booking", async (req, res) => {
  const data = await UserBook.find({});
  res.json(data);
  console.log(data);
});

app.put("/dashboard/:id", async (req, res) => {
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

app.delete("/dashboard/:id", async (req, res) => {
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


app.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const Hash = await bcrypt.hash(password, 10);

  UserLogin.create({ firstName, lastName, email, phone, password: Hash })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // const isValid = bcrypt.compare(password);

  try {
    const user = await UserLogin.findOne({ email: email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    
    if (!isMatch) {
        res.status(401).json({
        message: "Incorrect password",
      });
    }

      user.lastLogin = new Date();
      await user.save();
    
    return res.status(200).json({
      message: "Success",
      user: {
        username: user.email,
        isAdmin: user.isAdmin,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.log("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }

  console.log(`Posted Successfully`);
});

app.post("/contact", (req, res) => {
  UserContact.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

app.post("/book", (req, res) => {
  UserBook.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
  console.log(`Posted Successfully`);
});

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
