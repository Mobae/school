const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  class: String,
});

mongoose.model("student", StudentSchema);
