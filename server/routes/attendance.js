const { Router } = require("express");
const router = Router();

const Attendance = require("../models/Attendance");

router.get("/:studentId", async(req, res) => {
  try {
    const studentId = req.params.studentId;
    const att = await Attendance.find({ studentId });
    console.log(att);
    return res.status(200).json({
      'sucess': true,
      'data': att
    })
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
        'sucess': false,
        'data': 'Server error',
        'err': err
    })
  }
})

router.post("/", async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    
    return res.status(201).json({
      'sucess': true,
      'data': attendance
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
        'sucess': false,
        'data': 'Server error',
        'err': err
    })
  }
});

module.exports = router;
