const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
router = Router();

const { trimObj, genRandPass } = require("../utils/common");
const auth = require("../middleware/auth");

const Student = require("../models/Student");

router.get("/", auth, async (req, res) => {
  console.log(req.body.data);
});

router.post("/add", async (req, res) => {
  let obj = req.body;
  obj = trimObj(obj);
  const { firstName, lastName, email, studentClass } = obj;
  const stu = await Student.findOne({ email });
  if (stu) {
    res.status(400).send("User already exists");
  } else {
    const name = firstName + " " + lastName;
    let password = genRandPass();
    console.log(`password: ${password}`);
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    const student = new Student({ name, email, studentClass, password });
    await student.save();
    const payload = {
      data: {
        id: student.id,
      },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.send(token);
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
