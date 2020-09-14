const { text } = require('express');
const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  update: Boolean,
  description: String,
});

module.exports = mongoose.model('update', UpdateSchema);
