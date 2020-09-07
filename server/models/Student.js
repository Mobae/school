const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  studentClass: mongoose.Schema.Types.ObjectId,
  rank: { type: String, default: "0" },
  info: {
    address: String,
    motherName: String,
    fatherName: String,
    gaurdianName: String,
    rollNo: String,
    admissionNo: String,
    busNo: String,
    phone: String,
  },
});

module.exports = mongoose.model("student", StudentSchema);
