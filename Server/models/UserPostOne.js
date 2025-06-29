import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  public_id: String,
  filename: String,
  url: String,
  name: String,
  item: String,
  price: Number,
  model: String,
  createdAt: { type: Date, default: Date.now },
});

const UserPostOne = mongoose.model("oneImages", ImageSchema);
export default UserPostOne;
