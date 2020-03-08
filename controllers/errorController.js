module.exports = (err, req, res, next) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 500;

  res.status(err.statusCode).json({
    success: err.status,
    message: err.message
  });
  next();
};