const { Router } = require("express");
router = Router();

const auth = require("../middleware/auth");

router.get("/login", auth, (req, res) => {
  if (req.body.data) {
    console.log(req.body.data);
  } else {
    console.log("no data");
  }
});

module.exports = router;
