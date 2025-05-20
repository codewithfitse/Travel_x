import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

const UserLogin = mongoose.model("Logins", UserSchema);
export default UserLogin;
