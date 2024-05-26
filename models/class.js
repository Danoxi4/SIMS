const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Add a reference to students array if needed in the future
});

module.exports = mongoose.model('Class', ClassSchema);
