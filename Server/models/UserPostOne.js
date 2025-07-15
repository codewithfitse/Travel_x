import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    userId: String,
    images: {
      type: [
        {
          url: {
            type: String,
            required: [true, "Cloudinary public ID is required"],
          },
          public_id: {
            type: String,
            required: [true, "Cloudinary public ID is required"],
          },
          filename: {
            type: String,
            required: [true, "Cloudinary public ID is required"],
          },
        },
      ],
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
      min: [1, "Quantity must be at least 1"],
    },
  },
  { timestamps: true }
);

const UserPostOne = mongoose.model("oneImages", ImageSchema);
export default UserPostOne;
