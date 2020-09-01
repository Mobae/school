const { Router } = require("express");
router = Router();

const { trimObj, genRandPass } = require("../utils/common");

const Student = require("../models/Student");

router.get("/", (req, res) => {
  const students = Student.find();
  res.send(students);
});

router.post("/", (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { firstName, lastName, email, studentClass } = obj;
  const name = firstName + " " + lastName;
  const pass = genRandPass();
  console.log(name, email, studentClass, pass);
});

module.exports = router;
