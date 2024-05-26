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
    required: true,
    min: 0,
    max: 100,  // Assuming scores are between 0 and 100
  },
  test2: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  assignments: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  finalExam: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  // Calculate total score as a virtual property (not stored in DB)
  total: {
    type: Number,
    virtual: true,
    get() {
      return this.test1 + this.test2 + this.assignments + this.finalExam;
    },
  },
  rank: {
    type: Number,
  },
});

// Pre-save hook to calculate total before saving
CourseResultSchema.pre('save', async function (next) {
  this.total = this.test1 + this.test2 + this.assignments + this.finalExam;
  next();
});

module.exports = mongoose.model('CourseResult', CourseResultSchema);
