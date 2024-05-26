const mongoose = require('mongoose');

const CourseResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  courseOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseOffering',
    required: true,
  },
  test1: {
    type: Number,
  },
  test2: {
    type: Number,
  },
  finalExam: {
    type: Number,
  },
  assignments: {
    type: Number,
  },
  rank: {
    type: Number,
  },
});

module.exports = mongoose.model('CourseResult', CourseResultSchema);
