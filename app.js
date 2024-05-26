const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Configure body parsing middleware (to handle form data or JSON payloads)
app.use(express.json());

// Add routes for your application functionalities (placeholder for now)
app.use('/api/students', require('./routes/students')); // Replace with actual route logic
app.use('/api/teachers', require('./routes/teachers')); // Replace with actual route logic
app.use('/api/courses', require('./routes/courses')); // Replace with actual route logic
// ... Add routes for other functionalities

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server and listen for connections
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
