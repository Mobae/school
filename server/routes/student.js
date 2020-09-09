const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

const { trimObj, genRandPass } = require("../utils/common");
const auth = require("../middleware/auth");

const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");
const Admin = require("../models/Admin");

router.get("/students/all", async (req, res) => {
  try {
    const students = await Student.find();

    return res.status(200).json({
      sucess: true,
      data: students,
    });
  } catch (err) {
    return res.status(404).json({
      sucess: false,
      error: err,
    });
  }
});

router.get("/teachers/all", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    console.log(teachers);

    return res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (err) {
    return res.status(404).json({
      sucess: false,
      error: err,
    });
  }
});

router.get("/initial", auth, async (req, res) => {
  const student = await Student.findById(req.body.data.id);
  const cls = await Class.findById(student.studentClass);
  student.className = cls.name;
  return res.json({
    student,
  });
});

router.get("/:id", auth, async (req, res) => {
  try {
    console.log(`STUDENT ID: ${req.params.id}`);
    let student = await Student.findById(req.params.id);
    delete student.password;
    return res.json({
      student,
    });
  } catch (err) {
    return res.status(404).json({
      err,
    });
  }
});

router.get("/teacher/:teacherId", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.teacherId);
    console.log(teacher);

    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (err) {
    return res.status(404).json({
      sucess: false,
      error: err,
    });
  }
});

router.post("/update/student", async (req, res) => {
  try {
    const studentId = req.body.studentId;
    const student = await Student.findById(studentId);

    if (req.body.classId) {
      const oldClass = await Class.findById(student.studentClass);
      oldClass.students = oldClass.students.filter(
        (student) => student == studentId
      );
      oldClass.save();

      const class_ = await Class.findById(req.body.classId);
      class_.students.push({ student: student.id });
      class_.save();
    }

    const newStudent = await student.updateOne({
      name: req.body.name || student.name,
      email: req.body.email || student.email,
      studentClass: req.body.classId || student.studentClass,
    });
    student.save();
    return res.status(201).json({
      sucess: true,
      student: newStudent,
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/update/teacher", async (req, res) => {
  try {
    const teacherId = req.body.teacherId;
    const teacher = await Teacher.findById(teacherId);

    const newTeacher = await Teacher.updateOne({
      name: req.body.name || teacher.name,
      email: req.body.email || teacher.email,
    });

    return res.status(201).json({
      success: true,
      teacher: newTeacher,
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/add", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const {
    firstName,
    lastName,
    email,
    rank,
    studentClass,
    teacherClass,
    info,
  } = obj;
  const stu = await Student.findOne({ email });
  const tea = await Teacher.findOne({ email });
  if (stu || tea) {
    res.status(400).json({ msg: "User already exists" });
  } else {
    const name = firstName + " " + lastName;
    let password = genRandPass();
    console.log(`password: ${password}`);
    const tempPass = "abcd";
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(tempPass, salt);
    if (rank === "0") {
      const student = new Student({
        name,
        email,
        studentClass,
        password,
        info,
      });

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
      res.json({ token, name, email, rank, _id: student.id });
    } else if (rank === "1") {
      const teacher = new Teacher({
        name,
        email,
        password,
        teacherClass,
        info,
      });
      await teacher.save();
      const payload = {
        data: {
          id: teacher.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token, name, email, rank });
    } else if (rank === "2") {
      const admin = new Admin({ name, email, password, rank });
      await admin.save();
      const payload = {
        data: {
          id: admin.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token, name, email, rank });
    }
  }
});

router.post("/login", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { email, password } = obj;
  if (!email || !password) {
    res.status(400).json({ msg: "Invalid credentials" });
    return;
  }
  let user = await Student.findOne({ email });
  if (user) {
    const { name, rank, studentClass } = user;
    const passMatches = await bcrypt.compare(password, user.password);
    if (passMatches) {
      const payload = {
        data: {
          id: user.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      const { id } = user;
      return res.json({ token, name, email, rank, studentClass, id });
    }
  }
  user = await Teacher.findOne({ email });
  if (user) {
    console.log("hi");
    const { name, rank, teacherClass } = user;
    const passMatches = await bcrypt.compare(password, user.password);
    if (passMatches) {
      const payload = {
        data: {
          id: user.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return res.json({ token, name, email, rank, teacherClass });
    }
  } else {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
});

module.exports = router;
