import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  avatar: String,
  isAdmin: { type: boolean, default: true },
});

export default mongoose.model("UserOauth", userSchema);
