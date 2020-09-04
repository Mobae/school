const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classTeacher: {
    type: Schema.Types.ObjectId,
  },
  subTeachers: [
    {
      teacher: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  students: [
    {
      student: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});

module.exports = mongoose.model("Class", ClassSchema);
