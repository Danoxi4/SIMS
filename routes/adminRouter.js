const express = require('express');
const { registerStudent,
        registerTeacher,
        sendEmailToStudents,
        sendEmailToTeachers,
        sendEmailToAll
    } = require('../controllers/adminController');
const logger = require('../middleware/logger');

const router = express.Router();
router.post('/registerStudent', registerStudent);
router.post('/registeTeacher', registerTeacher);

router.post('/sendEmailToStudents', sendEmailToStudents);
router.post('/sendEmailToTeachers', sendEmailToTeachers);
router.post('/sendEmailToAll', sendEmailToAll);

// Additional routes for student functionalities...

module.exports = router;
