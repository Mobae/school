const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

const { trimObj, genRandPass } = require("../utils/common");
const auth = require("../middleware/auth");

const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");

router.get("/", auth, async (req, res) => {
  console.log(req.body.data);
});

router.post("/update/student", async(req, res) => {
  try {
      const studentId = req.body.studentId;
      const student = await Student.findById(studentId);

      if(req.body.classId){
        const oldClass = await Class.findById(student.studentClass);
        oldClass.students = oldClass.students.filter((student) => student == studentId);
        oldClass.save();

        const class_ = await Class.findById(req.body.classId);
        class_.students.push({ student: student.id });
        class_.save();
      }

      const newStudent = await student.updateOne({
        name: req.body.name || student.name,
        email: req.body.email || student.email,
        studentClass: req.body.classId || student.studentClass
      })
      student.save();
      return res.status(201).json({
        'sucess': true,
        'student': newStudent
      })
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/update/teacher", async(req, res) => {
  try {
    const teacherId = req.body.teacherId;
    const teacher = await Teacher.findById(teacherId);

    const newTeacher = await Teacher.updateOne({
      name: req.body.name || teacher.name,
      email: req.body.email || teacher.email,
    });

    return res.status(201).json({
      'success': true,
      'teacher': newTeacher
    });

  } catch (err) {
    console.log(err);
    return res.json(err);
  }
})

router.post("/add", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { firstName, lastName, email, studentClass, rank, teacherClass } = obj;
  const stu = await Student.findOne({ email });
  const tea = await Teacher.findOne({ email });
  if (stu || tea) {
    res.status(400).send("User already exists");
  } else {
    const name = firstName + " " + lastName;
    let password = genRandPass();
    console.log(`password: ${password}`);
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    if (rank === "0") {
      const student = new Student({ name, email, studentClass, password });

      const class_ = await Class.findById(studentClass);
      class_.students.push({ student: student.id });
      class_.save();

      await student.save();
      const payload = {
        data: {
          id: student.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.send(token);
    } else if (rank === "1") {
      const teacher = new Teacher({ name, email, teacherClass, password });
      await teacher.save();
      const payload = {
        data: {
          id: teacher.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.send(token);
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Student.findOne({ email });
  const passMatches = await bcrypt.compare(password, user.password);
  if (passMatches) {
    const payload = {
      data: {
        id: user.id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.send(token);
  } else {
    res.status(400).send("Wrong credentials");
  }
});

module.exports = router;
