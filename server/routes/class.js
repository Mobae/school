const { Router } = require("express");
const Class = require("../models/Class");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

const auth = require("../middleware/auth");

router = Router();

router.get("/view", async (req, res) => {
  res.send("Classes Get Triggered !!");
});

router.get("/:id", auth, async (req, res) => {
  try {
    console.log(req.params.id);
    const class_ = await Class.findById(req.params.id);
    res.json({ class_ });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/all", async (req, res) => {
  try {
    const classes = await Class.find();

    return res.status(200).json({
      sucess: true,
      data: classes,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.get("/view/:classId", async (req, res) => {
  try {
    const class_ = await Class.findById(req.params.classId);

    return res.status(200).json({
      sucess: true,
      data: class_,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    const name = req.body.name;
    const payload = {
      name,
    };
    console.log(payload);
    const newClass = await Class.create(payload);

    res.status(200).json({
      sucess: true,
      data: newClass,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.get("/students/:classId", async (req, res) => {
  try {
    console.log(req.params.classId);

    const class_ = await Class.findById(req.params.classId);
    const students = await Student.find({ studentClass: class_._id });

    res.status(200).json({
      sucess: true,
      data: students,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.get("/teachers/:classId", async (req, res) => {
  try {
    console.log(req.params.classId);

    const class_ = await Class.findById(req.params.classId);
    const classTeacher = await Teacher.find({ teacherClass: class_._id });
    const subTeachers = await Teacher.find({
      teacherSubClasses: { $elemMatch: { class: class_.id } },
    });

    const teachers = {
      classTeacher,
      subTeachers,
    };

    res.status(200).json({
      sucess: true,
      data: teachers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.post("/classTeacher", async (req, res) => {
  try {
    const class_ = await Class.findById(req.body.class);
    const teacher = await Teacher.findById(req.body.classTeacher);

    // Removing class from old class teacher's model
    if (class_.classTeacher) {
      const oldClassTeacher = await Class.findById(class_.classTeacher);
      oldClassTeacher.teacherClass = null;
      oldClassTeacher.save();
    }
    // Adding this class to new class teacher's model
    teacher.teacherClass = class_.id;
    teacher.save();
    // Adding new teacher to this class
    class_.classTeacher = req.body.classTeacher;
    class_.save();

    return res.status(200).json({
      success: true,
      data: class_,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      data: "Server error",
      err: err,
    });
  }
});

router.post("/subTeacher", async (req, res) => {
  try {
    const class_ = await Class.findById(req.body.class);
    const subTeacher = req.body.subTeacher;
    class_.subTeachers.push({ teacher: subTeacher });
    class_.save();

    const teacher = await Teacher.findById(subTeacher);
    teacher.teacherSubClasses.push({ class: class_.id });
    teacher.save();

    return res.status(200).json({ class: class_ });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

module.exports = router;
