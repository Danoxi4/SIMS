const mongoose = require('mongoose');

const GradeLevelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('GradeLevel', GradeLevelSchema);
