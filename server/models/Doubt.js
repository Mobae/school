const mongoose = require("mongoose");

const DoubtSchema = mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  title: String,
  description: String,
  author: String,
  date: { type: Date, default: Date.now },
  replies: Array,
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("Doubt", DoubtSchema);
