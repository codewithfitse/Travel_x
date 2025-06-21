import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  public_id: String,
  filename: String,
  url: String,
  name: String,
  item: String,
  model: String,
  createdAt: { type: Date, default: Date.now },
});

const UserPostOne = mongoose.model("oneImages", ImageSchema);
export default UserPostOne;
