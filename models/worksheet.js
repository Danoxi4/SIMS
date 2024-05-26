const mongoose = require('mongoose');

const WorksheetSchema = new mongoose.Schema({
  worksheetName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  courseOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseOffering',
    required: true,
  },
});

module.exports = mongoose.model('Worksheet', WorksheetSchema);
