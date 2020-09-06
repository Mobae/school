const mongoose = require("mongoose");

const ClassNoticeSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  title: String,
  description: String,
  date: Date,
  author: String,
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("classnotice", ClassNoticeSchema);
