const express = require('express');
const { registerStudent,
        registerTeacher,
        sendEmailToStudents,
        sendEmailToTeachers,
        sendEmailToAll,
        updateStudentGradeLevel,
        updateStudentName,
        updateStudentRedMarks,
        updateStudentWithdrawal,
        updateStudentSuspension
    } = require('../controllers/adminController');
const logger = require('../middleware/logger');

const router = express.Router();
router.post('/registerStudent', registerStudent);
router.post('/registeTeacher', registerTeacher);

router.post('/sendEmailToStudents', sendEmailToStudents);
router.post('/sendEmailToTeachers', sendEmailToTeachers);
router.post('/sendEmailToAll', sendEmailToAll);

router.get('/:studentId', getStudentById);
router.put('/:studentId/updateName', updateStudentName);
router.put('/:studentId/updateGradeLevel', updateStudentGradeLevel);
router.put('/:studentId/updateRedMarks', updateStudentRedMarks);
router.put('/:studentId/updateSuspension', updateStudentSuspension);
router.put('/:studentId/updateWithdrawal', updateStudentWithdrawal);

router.get('/:teacherId', getTeacherById);
router.put('/:teacherId/updateName', updateTeacherName);
router.put('/:teacherId/updateSubject', updateTeacherSubject);
router.put('/:teacherId/updateSuspension', updateTeacherSuspension);
router.put('/:teacherId/updateRetirement', updateTeacherRetirement);

// Additional routes for student functionalities...

module.exports = router;
