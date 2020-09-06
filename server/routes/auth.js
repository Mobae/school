const { Router } = require("express");
router = Router();

const auth = require("../middleware/auth");

router.get("/login", auth, (req, res) => {
  console.log("hi");
  res.json({ msg: "hi" });
});

module.exports = router;
