const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Module', ModuleSchema);
