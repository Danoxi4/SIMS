const mongoose = require('mongoose');

const ClassScheduleSchema = new mongoose.Schema({
  courseOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseOffering',
    required: true,
  },
  classId: { // Assuming you'll use the Class model in the future
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  dayOfWeek: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ClassSchedule', ClassScheduleSchema);
