const { Router } = require("express");
const router = Router();

const Room = require("../models/Room");

router.get("/:classId", async (req, res) => {
  const room = await Room.find({ classroom: req.params.classId });
  if (room) {
    res.json({ messages: room.messages });
  }
});

router.post("/:classId", async (req, res) => {
  try {
    Room.update(
      { classroom: req.params.classId },
      { $push: { messages: req.body } },
      done
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
