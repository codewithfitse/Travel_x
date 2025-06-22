import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  url: String,
  name: String,
  item: String,
  price: String,
  model: String,
  createdAt: { type: Date, default: Date.now },
});

const UserPost = mongoose.model("Images", ImageSchema);
export default UserPost;
