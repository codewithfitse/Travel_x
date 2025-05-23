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
    methods: ["POST", "GET"],
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

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const Hash = await bcrypt.hash(password, 10);

  UserLogin.create({ firstName, lastName, email, phone, password: Hash })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // const isValid = bcrypt.compare(password);

  UserLogin.findOne({ email: email })
    .then((users) => {
      const final = bcrypt.compare(password, users.password);
      if (users) {
        if (final) {
          res.json("Success");
        } else if (final) {
          res.json("Wrong");
        }
      } else {
        res.json("User not found");
      }
    })
    .catch((err) => console.log(err));
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
