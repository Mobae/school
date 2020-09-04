const { Router } = require("express");
router = Router();

router.get("/login", (req, res) => {
  console.log("hi");
  res.json({ msg: "hi" });
});

module.exports = router;
