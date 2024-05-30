function errorHandler(err, req, res, next) {
    console.error(err.stack); // Print the error stack trace
    res.status(500).json({ message: 'Internal Server Error' }); // Inform user about the error
  }
  
  module.exports = errorHandler;
  