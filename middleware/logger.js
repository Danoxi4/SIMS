function logUrl(req, res, next) {
    console.log('Request URL:', req.originalUrl); // Logs the complete URL
    console.log(req.body); // Logs the
    next(); // Pass control to the next middleware or route handler
  }

  module.exports = logUrl;