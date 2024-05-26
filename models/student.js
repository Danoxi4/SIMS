const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gradeLevelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GradeLevel',
    required: true,
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now,
  },
  redMarks: {
    type: Number,
    default: 0,
  },
  isWithdrawn: {
    type: Boolean,
    default: false,
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Student', StudentSchema);
