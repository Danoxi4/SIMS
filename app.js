const express = require('express');
const errorHandler = require('./middleware/errorHandler'); // Replace with your path
const logger = require('./middleware/logger');
//const studentController = require('./controllers/studentController');
const adminRouter = require('./routes/adminRouter');

const app = express();
app.use(express.json());
app.use(logger)
app.post('/admin', adminRouter);


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err); // Pass the error to the error handling middleware
  });

app.use(errorHandler)
// ... other routes for your application
const port = process.env.PORT || 3000; // Use environment variable or default port

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
