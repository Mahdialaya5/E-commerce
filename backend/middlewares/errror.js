module.exports = (err, req, res) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error";
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });}