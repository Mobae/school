const { Router } = require("express");
const jwt = require("jsonwebtoken");
router = Router();

const auth = require("../middleware/auth");

router.get("/login", auth, (req, res) => {
  res.json({ success: "true" });
});

module.exports = router;
