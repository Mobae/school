const { Router } = require("express");
const router = Router();

const SchoolNotice = require("../models/SchoolNotice");

router.get("/", auth, async (req, res) => {
  try {
    const notices = SchoolNotice.find();
    res.status(200).json({ notices });
  } catch (err) {
    res.status(500).json({ err: "Server error" });
  }
});
