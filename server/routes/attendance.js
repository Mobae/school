const { Router } = require("express");
const router = Router();

const Attendance = require("../models/Attendance");

router.post("/", async (req, res) => {
  const attendance = new Attendance(req.body);
  console.log(attendance);
});

module.exports = router;
