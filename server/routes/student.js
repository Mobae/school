const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
router = Router();

const { trimObj, genRandPass } = require("../utils/common");
const auth = require("../middleware/auth");

const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

router.get("/", auth, async (req, res) => {
  console.log(req.body.data);
});

router.post("/add", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { firstName, lastName, email, studentClass, rank, teacherClass } = obj;
  const stu = await Student.findOne({ email });
  const tea = await Teacher.findOne({ email });
  if (stu || tea) {
    res.status(400).json({ msg: "User already exists" });
  } else {
    const name = firstName + " " + lastName;
    let password = genRandPass();
    console.log(`password: ${password}`);
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    if (rank === "0") {
      const student = new Student({ name, email, studentClass, password });
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
      console.log(teacher);
      await teacher.save();
      const payload = {
        data: {
          id: teacher.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token });
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
    res.json({ token });
  } else {
    res.status(400).json({ msg: "Wrong credentials" });
  }
});

module.exports = router;
