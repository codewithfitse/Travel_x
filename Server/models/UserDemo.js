import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: String,
    userId: String,
    email: String,
    phone: String,
    destination: String,
    status: {
      type: String,
      default: "Pending",
    },
    item: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const UserBook = mongoose.model("Demos", UserSchema);
export default UserBook;
