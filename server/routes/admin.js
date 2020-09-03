const { Router } = require("express");
const router = Router();

const Admin = require("../models/Admin");

const auth = require("../middleware/auth");
const { admin } = require("../middleware/rank");

router.get("/", auth, admin, async (req, res) => {
  const { data } = req.body;
  const admin = await Admin.findById(data.id);
  res.json({ admin });
});

module.exports = router;
