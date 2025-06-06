import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const UserPost = mongoose.model("Images", ImageSchema);
export default UserPost;
