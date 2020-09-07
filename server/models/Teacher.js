const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  info: {
    phoneNo: String
  }
  teacherClass: mongoose.Schema.Types.ObjectId,
  teacherSubClasses: [
    {
      class: {
        type: mongoose.Schema.ObjectId
      }
    }
  ],
  rank: { type: String, default: "1" },
});

module.exports = mongoose.model("teacher", TeacherSchema);
