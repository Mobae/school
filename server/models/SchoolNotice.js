const mongoose = require("mongoose");

const SchoolNoticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  author: String,
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("schoolnotice", SchoolNoticeSchema);
