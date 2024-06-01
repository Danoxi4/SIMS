const Student = require('../models/student'); // Replace with your path
const Teacher = require('../models/teacher'); // Replace with your path
const bcrypt = require('bcrypt'); // For password hashing (optional)

const { sendEmail } = require('../utils/emailService');

async function registerStudent(req, res) {
  try {
    // Destructure required information from request body
    const { firstName, lastName, email, password } = req.body;
    // Optional: Password Hashing (using bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10); // Replace 10 with desired cost factor
    // Use Date.now() to get current timestamp for registration date
    const dateOfRegistration = Date.now();
    // Create a new student with destructured data (and hashed password)
    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: hashedPassword,  // Use hashed password if available
      dateOfRegistration,
    //  gradeLevelId,
    });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering student' });
  }
}


async function registerTeacher(req, res) {
    try {
      // Destructure required information from request body
      const { firstName, lastName, email, password } = req.body;
      // Optional: Password Hashing (using bcrypt)
      const hashedPassword = await bcrypt.hash(password, 10); // Adjust cost factor as needed
      // Create a new teacher with destructured data (and hashed password)
      const dateEmploy = Date.now();
      const newTeacher = new Teacher({
        firstName,
        lastName,
        email,
        dateEmploy,
        password: hashedPassword ? hashedPassword : password,  // Use hashed password if available
      });
      await newTeacher.save();
      res.status(201).json({ message: 'Teacher registered successfully!' });
    } catch (error) {
      console.error(error);
      // Handle potential errors (e.g., email conflict)
      if (error.code === 11000) { // Duplicate key error (unique email)
        res.status(400).json({ message: 'Email already exists!' });
      } else {
        res.status(500).json({ message: 'Error registering teacher' });
      }
    }
  }

const sendEmailToStudents = async (req, res) => {
    try {
        const students = await Student.find({}, 'email');
        const emails = students.map(student => student.email);
        await sendEmail(emails, req.body.subject, req.body.message);
        res.status(200).send('Emails sent to students');
    } catch (error) {
        res.status(500).send('Error sending emails to students');
    }
};

const sendEmailToTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({}, 'email');
        const emails = teachers.map(teacher => teacher.email);
        await sendEmail(emails, req.body.subject, req.body.message);
        res.status(200).send('Emails sent to teachers');
    } catch (error) {
        res.status(500).send('Error sending emails to teachers');
    }
};

const sendEmailToAll = async (req, res) => {
    try {
        const students = await Student.find({}, 'email');
        const teachers = await Teacher.find({}, 'email');
        const emails = [...students.map(student => student.email), ...teachers.map(teacher => teacher.email)];
        await sendEmail(emails, req.body.subject, req.body.message);
        res.status(200).send('Emails sent to all');
    } catch (error) {
        res.status(500).send('Error sending emails to all');
    }
};


// Fetch student by ID
const getStudentById = async (req, res) => {
  const { studentId } = req.params;

  try {
      const student = await Student.findById(studentId);
      if (!student) {
          return res.status(404).send('Student not found');
      }
      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error fetching student details');
  }
};

// Update student first name and last name
const updateStudentName = async (req, res) => {
  const { studentId } = req.params;
  const { firstName, lastName } = req.body;

  try {
      const student = await Student.findByIdAndUpdate(
          studentId,
          { firstName, lastName },
          { new: true, runValidators: true }
      );
      
      if (!student) {
          return res.status(404).send('Student not found');
      }

      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error updating student name');
  }
};

// Update student grade level
const updateStudentGradeLevel = async (req, res) => {
  const { studentId } = req.params;
  const { gradeLevelId } = req.body;

  try {
      const student = await Student.findByIdAndUpdate(
          studentId,
          { gradeLevelId },
          { new: true, runValidators: true }
      );

      if (!student) {
          return res.status(404).send('Student not found');
      }

      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error updating student grade level');
  }
};

// Update student red marks
const updateStudentRedMarks = async (req, res) => {
  const { studentId } = req.params;
  const { redMarks } = req.body;

  try {
      const student = await Student.findByIdAndUpdate(
          studentId,
          { redMarks },
          { new: true, runValidators: true }
      );

      if (!student) {
          return res.status(404).send('Student not found');
      }

      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error updating student red marks');
  }
};

// Update student suspension status
const updateStudentSuspension = async (req, res) => {
  const { studentId } = req.params;
  const { isSuspended } = req.body;

  try {
      const student = await Student.findByIdAndUpdate(
          studentId,
          { isSuspended },
          { new: true, runValidators: true }
      );

      if (!student) {
          return res.status(404).send('Student not found');
      }

      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error updating student suspension status');
  }
};

// Update student withdrawal status
const updateStudentWithdrawal = async (req, res) => {
  const { studentId } = req.params;
  const { isWithdrawn } = req.body;

  try {
      const student = await Student.findByIdAndUpdate(
          studentId,
          { isWithdrawn },
          { new: true, runValidators: true }
      );

      if (!student) {
          return res.status(404).send('Student not found');
      }

      res.status(200).json(student);
  } catch (error) {
      res.status(500).send('Error updating student withdrawal status');
  }
};


// Fetch teacher by ID
const getTeacherById = async (req, res) => {
  const { teacherId } = req.params;

  try {
      const teacher = await Teacher.findById(teacherId);
      if (!teacher) {
          return res.status(404).send('Teacher not found');
      }
      res.status(200).json(teacher);
  } catch (error) {
      res.status(500).send('Error fetching teacher details');
  }
};

// Update teacher first name and last name
const updateTeacherName = async (req, res) => {
  const { teacherId } = req.params;
  const { firstName, lastName } = req.body;

  try {
      const teacher = await Teacher.findByIdAndUpdate(
          teacherId,
          { firstName, lastName },
          { new: true, runValidators: true }
      );
      
      if (!teacher) {
          return res.status(404).send('Teacher not found');
      }

      res.status(200).json(teacher);
  } catch (error) {
      res.status(500).send('Error updating teacher name');
  }
};

// Update teacher subject
const updateTeacherSubject = async (req, res) => {
  const { teacherId } = req.params;
  const { subject } = req.body;

  try {
      const teacher = await Teacher.findByIdAndUpdate(
          teacherId,
          { subject },
          { new: true, runValidators: true }
      );

      if (!teacher) {
          return res.status(404).send('Teacher not found');
      }

      res.status(200).json(teacher);
  } catch (error) {
      res.status(500).send('Error updating teacher subject');
  }
};

// Update teacher suspension status
const updateTeacherSuspension = async (req, res) => {
  const { teacherId } = req.params;
  const { isSuspended } = req.body;

  try {
      const teacher = await Teacher.findByIdAndUpdate(
          teacherId,
          { isSuspended },
          { new: true, runValidators: true }
      );

      if (!teacher) {
          return res.status(404).send('Teacher not found');
      }

      res.status(200).json(teacher);
  } catch (error) {
      res.status(500).send('Error updating teacher suspension status');
  }
};

// Update teacher retirement status
const updateTeacherRetirement = async (req, res) => {
  const { teacherId } = req.params;
  const { isRetired } = req.body;

  try {
      const teacher = await Teacher.findByIdAndUpdate(
          teacherId,
          { isRetired },
          { new: true, runValidators: true }
      );

      if (!teacher) {
          return res.status(404).send('Teacher not found');
      }

      res.status(200).json(teacher);
  } catch (error) {
      res.status(500).send('Error updating teacher retirement status');
  }
};


module.exports = { 
  registerStudent, 
  registerTeacher,
  sendEmailToStudents, 
  sendEmailToTeachers,
  sendEmailToAll,
  getStudentById,
  updateStudentName,
  updateStudentGradeLevel,
  updateStudentRedMarks,
  updateStudentSuspension,
  updateStudentWithdrawal,
  getTeacherById,
  updateTeacherName,
  updateTeacherSubject,
  updateTeacherSuspension,
  updateTeacherRetirement,
};
