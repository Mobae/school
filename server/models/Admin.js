const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rank: String,
});

module.exports = mongoose.model("admin", AdminSchema);
