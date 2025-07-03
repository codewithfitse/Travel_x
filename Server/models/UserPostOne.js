import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    userId: String,
    public_id: String,
    filename: {
      type: String,
    },
    url: {
      type: String,
    },
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
    model: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const UserPostOne = mongoose.model("oneImages", ImageSchema);
export default UserPostOne;
