const mongoose = require('mongoose');

const ExamScheduleSchema = new mongoose.Schema({
  courseOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseOffering',
    required: true,
  },
  examRoomId: { // Assuming you'll define an ExamRoom model later
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExamRoom',
  },
  date: {
    type: Date,
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
  portion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ExamSchedule', ExamScheduleSchema);
