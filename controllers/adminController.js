const Student = require('../models/student'); // Replace with your path
const Teacher = require('../models/teacher'); // Replace with your path
const bcrypt = require('bcrypt'); // For password hashing (optional)

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

module.exports = { registerStudent, registerTeacher };
