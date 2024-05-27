const Student = require('../models/student'); // Replace with your path
const bcrypt = require('bcrypt'); // For password hashing (optional)

async function registerStudent(req, res) {
  try {
    // Destructure required information from request body
    const { firstName, lastName, email, password, gradeLevelId } = req.body;
    // Optional: Password Hashing (using bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10); // Replace 10 with desired cost factor
    // Use Date.now() to get current timestamp for registration date
    const dateOfRegistration = Date.now();
    // Create a new student with destructured data (and hashed password)
    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: hashedPassword ? hashedPassword : password,  // Use hashed password if available
      dateOfRegistration,
      gradeLevelId,
    });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering student' });
  }
}

module.exports = registerStudent;
