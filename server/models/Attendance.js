const mongoose = require("mongoose");
const AttendanceSchema = mongoose.Schema({
  date: Date,
  status: String,
});

mongoose.model("attendance", AttendanceSchema);
