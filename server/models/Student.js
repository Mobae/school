const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  studentClass: String,
  rank: { type: String, default: "0" },
});

module.exports = mongoose.model("student", StudentSchema);
