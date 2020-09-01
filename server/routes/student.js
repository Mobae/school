const { Router } = require("express");
router = Router();

const Student = require("../models/Student");

router.get("/", (req, res) => {
  const students = Student.find();
  res.send(students);
});

module.exports = router;
