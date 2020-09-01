const mongoose = require("mongoose");
const AttendanceSchema = mongoose.Schema({
  date: Date,
  status: String,
});

module.exports = mongoose.model("attendance", AttendanceSchema);
