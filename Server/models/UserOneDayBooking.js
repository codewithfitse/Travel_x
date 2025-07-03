import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  url: String,
  ownerName: String,
  customName: String,
  email: String,
  phone: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  price: Number,
  model: String,
  date: Date,
  quantity: {
    type: Number,
    default: 1,
  },
  message: String,
  destination: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const UserOneDay = mongoose.model("oneDayBook", ImageSchema);
export default UserOneDay;
