const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  status: Boolean,
  description: String,
  URL: String,
});

module.exports = mongoose.model('update', UpdateSchema);
