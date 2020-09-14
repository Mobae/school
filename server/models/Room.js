const mongoose = require("mongoose");
const Message = require("./Message");

const RoomSchema = mongoose.Schema({
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  messages: [],
});

module.exports = mongoose.model("Room", RoomSchema);
