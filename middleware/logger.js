const logger = (req, res, next) => {
  // Mencatat method dan URL yang diminta
  console.log(`[LOGGER] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;