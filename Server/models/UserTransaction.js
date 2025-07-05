import mongoose from "mongoose";

const UserTransactionSchema = mongoose.schema({
  transactionID: String,
  amount: Number,
});

const UserTransaction = new mongoose.model(
  "transactions",
  UserTransactionSchema
);
export default UserTransaction;
