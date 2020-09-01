const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

mongoose.model("teacher", TeacherSchema);
