const mongoose = require('mongoose');


// Option 2: Separate schema for a dedicated final grade (if finalGrade has different meaning)
const FinalResultSchema = new mongoose.Schema({
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
  finalGrade: {
    type: Number,
    required: true,
    min: 0,
    max: 100,  // Assuming final grade is also between 0 and 100
  },
});

module.exports = mongoose.model('FinalResult', FinalResultSchema);
