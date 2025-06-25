import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  public_id: String,
  filename: String,
  url: String,
  name: String,
  item: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const UserPost = mongoose.model("Images", ImageSchema);
export default UserPost;
