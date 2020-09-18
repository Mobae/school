const { Router } = require("express");
const router = Router();

const Doubt = require("../models/Doubt");

router.get("/:classId", async (req, res) => {
  try {
    const doubts = await Doubt.find({ class: classId });
    res.json({ doubts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { class_, author, title, description } = req.body;
  const doubt = new Doubt({ class: class_, author, title, description });
  doubt.save();
});

router.post("/reply", async (req, res) => {
  const { reply, _id } = req.body;
  const doubt = (await Doubt.findById(_id)).toJSON();
  doubt.replies.push(reply);
  doubt.save();
});

module.exports = router;
