const { Router } = require("express");
const router = Router();

const ClassNotice = require("../models/ClassNotice");

router.get("/", auth, async (req, res) => {
  try {
    const { class_ } = req.body;
    const notices = ClassNotice.find({ class: class_ });
    res.status(200).json({ notices });
  } catch (err) {
    res.status(500).json({ err: "Server error" });
  }
});
