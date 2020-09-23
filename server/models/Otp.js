const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now() },
  otpStr: String,
});

module.exports = mongoose.model("Otp", OtpSchema);
