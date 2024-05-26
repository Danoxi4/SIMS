const mongoose = require('mongoose');

const CourseOfferingTeacherSchema = new mongoose.Schema({
  courseOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseOffering',
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
});

module.exports = mongoose.model('CourseOfferingTeacher', CourseOfferingTeacherSchema);
