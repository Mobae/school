const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Student = require("../models/Student");

module.exports = async function (req, res, next) {
  const token = req.get("auth-token");
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  const id = data.id;
  const student = await Student.findById(id);
  req.body.data = student;
  next();
};
