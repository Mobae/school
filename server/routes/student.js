const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
router = Router();

const { trimObj, genRandPass } = require("../utils/common");

const Student = require("../models/Student");

router.get("/", (req, res) => {
  const students = Student.find();
  res.send(students);
});

router.post("/", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { firstName, lastName, email, studentClass } = obj;
  const stu = await Student.findOne({ email });
  if (stu) {
    res.status(400).send("User already exists");
  } else {
    const name = firstName + " " + lastName;
    let password = genRandPass();
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    const student = new Student({ name, email, studentClass, password });
    await student.save();
    res.send(student);
  }
});

module.exports = router;
