import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  userId: String,
  url: String,
  ownerName: String,
  customName: String,
  email: String,
  item: String,
  price: String,
  model: String,
  status: {
    type: String,
    default: "Pending",
  },  
  createdAt: { type: Date, default: Date.now },
});

const UserOneDay = mongoose.model("oneDayBook", ImageSchema);
export default UserOneDay;
