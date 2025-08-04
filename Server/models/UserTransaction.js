import mongoose from "mongoose";

const UserTransactionSchema = mongoose.Schema({
  transactionId: String,
  amount: Number,
});

const UserTransaction = new mongoose.model(
  "transactions",
  UserTransactionSchema
);
export default UserTransaction;
