const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/register', studentController.registerStudent);

// Additional routes for student functionalities...

module.exports = router;
