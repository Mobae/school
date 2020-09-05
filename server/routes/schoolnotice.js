const { Router } = require("express");
const router = Router();

const auth = require("../middleware/auth");
const { admin } = require("../middleware/rank");

const SchoolNotice = require("../models/SchoolNotice");

router.get("/", auth, admin, async (req, res) => {
  try {
    const notices = SchoolNotice.find();
    res.status(200).json({ notices });
  } catch (err) {
    res.status(500).json({ err: "Server error" });
  }
});

router.post("/", auth, admin, async (req, res) => {
  try {
    const { title, description, author, date } = req.body;
    const schoolNotice = new SchoolNotice({ title, description, author, date });
    await schoolNotice.save();
  } catch (err) {
    res.status(500).json({ err: "Server error" });
  }
});
