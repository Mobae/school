const jwt = require("jsonwebtoken");

const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Admin = require("../models/Admin");

module.exports = async function (req, res, next) {
  const token = req.get("auth-token");
  console.log(token);
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  const id = data.id;
  let user = await Student.findById(id);
  if (user) {
    req.body.data = user;
    next();
  }
  user = await Teacher.findById(id);
  if (user) {
    req.body.data = user;
    console.log(user);
    next();
  }
  user = await Admin.findById(id);
  if (user) {
    req.body.data = user;
    console.log(user);
    next();
  }
};
