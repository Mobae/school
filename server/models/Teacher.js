const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  teacherClass: String,
  rank: { type: String, default: "1" },
});

module.exports = mongoose.model("teacher", TeacherSchema);
