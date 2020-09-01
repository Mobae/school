const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("teacher", TeacherSchema);
