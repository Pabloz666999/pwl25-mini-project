const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Mengirimkan respons error 500 (Internal Server Error)
  res.status(500).json({ 
    message: 'Something went wrong on the server.',
    error: err.message 
  });
};

module.exports = errorHandler;