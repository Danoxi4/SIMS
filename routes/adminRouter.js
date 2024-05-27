const express = require('express');
const { registerStudent } = require('../controllers/adminController');

const router = express.Router();

router.post('/register', registerStudent);

// Additional routes for student functionalities...

module.exports = router;
