const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  date: Date,
  status: String,
});

mongoose.model("attendance", AttendanceSchema);
