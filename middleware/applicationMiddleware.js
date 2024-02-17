const applicationMiddleware = (req, res, next) => {
    // Common functionality across routes
    console.log('Application middleware executed');
    next();
  };
  
  module.exports = {
    applicationMiddleware,
  };
  