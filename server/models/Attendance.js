const mongoose = require("mongoose");
const Student = require("./Student");

const AttendanceSchema = mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Student" 
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: String,
});

module.exports = mongoose.model("attendance", AttendanceSchema);
