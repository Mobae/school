const mongoose = require("mongoose");

const SchoolNoticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  author: String,
  status: String,
});

module.exports = mongoose.model("schoolnotice", SchoolNoticeSchema);
