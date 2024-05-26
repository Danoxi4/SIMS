const mongoose = require('mongoose');

const CourseOfferingSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  gradeLevelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GradeLevel',
    required: true,
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true,
  },
});

module.exports = mongoose.model('CourseOffering', CourseOfferingSchema);
