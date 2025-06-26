import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  public_id: String,
  filename: String,
  url: String,
  name: String,
  item: String,
  price: number,
  createdAt: { type: Date, default: Date.now },
});

const UserPost = mongoose.model("Images", ImageSchema);
export default UserPost;
