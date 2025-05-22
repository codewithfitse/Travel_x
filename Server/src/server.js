import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
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

const MONGO_DB =
  "mongodb://user:user123@ac-cg0zgxc-shard-00-00.ooin5ux.mongodb.net:27017,ac-cg0zgxc-shard-00-01.ooin5ux.mongodb.net:27017,ac-cg0zgxc-shard-00-02.ooin5ux.mongodb.net:27017/User?replicaSet=atlas-uvzhzw-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority";

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

  console.log(`Posted Successfully`);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserLogin.findOne({ email: email }).then((users) => {
    if (users) {
      if (users.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong");
      }
    } else {
      res.json("User not found");
    }
  });
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
