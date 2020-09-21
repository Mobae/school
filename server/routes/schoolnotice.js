const { Router } = require("express");
const router = Router();

const auth = require("../middleware/auth");
const { admin } = require("../middleware/rank");

const SchoolNotice = require("../models/SchoolNotice");

router.get("/", auth, async (req, res) => {
  console.log("hi");
  try {
    const notices = await SchoolNotice.find({ status: "active" });
    console.log(notices);
    res.status(200).json({ notices });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server error" });
  }
});

router.post("/", auth, admin, async (req, res) => {
  console.log("hi");
  try {
    const { title, description, author, date } = req.body;
    let schoolNotice;
    if (date) {
      schoolNotice = new SchoolNotice({ title, description, author, date });
    } else {
      schoolNotice = new SchoolNotice({ title, description, author });
    }
    await schoolNotice.save();
    res.json({
      schoolNotice,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server error" });
  }
});

router.delete("/", auth, admin, async (req, res) => {
  try {
    const { id } = req.body;
    const schoolNotice = (await SchoolNotice.findOne({ id })).toJSON();
    schoolNotice.status = "archived";
    await schoolNotice.save();
  } catch (err) {
    res.status(500).json({ err: "Server error" });
  }
});

module.exports = router;
