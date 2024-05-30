const express = require('express');
const { registerStudent, registerTeacher } = require('../controllers/adminController');
const logger = require('../middleware/logger');

const router = express.Router();
router.post('/registerStudent', registerStudent);
router.post('/registeTeacher', registerTeacher);

// Additional routes for student functionalities...

module.exports = router;
