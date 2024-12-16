const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  accNum: {
    type: String,
    unique: true,
    required: true,
    default: function () {
      return Math.floor(10000000000 + Math.random() * 90000000000).toString();
    },
  },
  accType: {
    type: String,
    enum: ["Savings", "Current"],
    required: true,
  },
  pan: { type: String, required: true },
  aadhar: { type: Number, required: true },
  createdAt: {
    type: Date, 
    default: Date.now,
  },
});

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = { AccountModel };
