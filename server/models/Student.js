const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  class: String,
});

module.exports = mongoose.model("student", StudentSchema);
