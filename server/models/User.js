const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rank: Number,
});

mongoose.model("user", UserSchema);
