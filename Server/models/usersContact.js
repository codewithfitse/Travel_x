import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phone: String,
  message: String,
});

const UserContact = mongoose.model("Contacts", UserSchema);
export default UserContact;
