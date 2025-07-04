import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "oneImages", // This should match the name of your car model
    required: true,
  },
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
  transationId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
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
