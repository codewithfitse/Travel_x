import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  avatar: String,
  role: {
    type: String,
    enum: ["admin", "subadmin", "user"],
    default: "user",
  },
});

export default mongoose.model("UserOauth", userSchema);
