import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  destination: String,
  message: String,
});

const UserBook = mongoose.model("Books", UserSchema);
export default UserBook;
