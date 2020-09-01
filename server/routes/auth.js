const { Router } = require("express");
router = Router();

router.get("/login", (req, res) => {
  res.send("hi from auth");
});

module.exports = router;
