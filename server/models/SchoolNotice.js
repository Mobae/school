const mongoose = require("mongoose");

const SchoolNoticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now() },
  author: String,
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("schoolnotice", SchoolNoticeSchema);
