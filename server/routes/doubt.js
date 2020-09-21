const { Router } = require("express");
const router = Router();

const Doubt = require("../models/Doubt");

const auth = require("../middleware/auth");
const { teacher, admin } = require("../middleware/rank");

router.get("/:classId", auth, async (req, res) => {
  try {
    const doubts = await Doubt.find({ class: classId, status: "active" });
    res.json({ doubts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", auth, async (req, res) => {
  const { class_, author, title, description } = req.body;
  try {
    const doubt = new Doubt({ class: class_, author, title, description });
    doubt.save();
    res.json({ doubt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/reply", auth, teacher, async (req, res) => {
  try {
    const { reply, _id } = req.body;
    const doubt = (await Doubt.findById(_id)).toJSON();
    doubt.replies.push(reply);
    doubt.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/archive", auth, admin, async (req, res) => {
  const { id_ } = req.body;
  if (id_) {
    try {
      const doubt = await Doubt.findByIdAndUpdate(id_, {
        status: "archived",
      });
      res.json({ doubt });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;
