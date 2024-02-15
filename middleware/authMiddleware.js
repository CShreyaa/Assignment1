// middleware/authMiddleware.js
const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated
    // You can implement your authentication logic here
    const isAuthenticated = true; // Example logic
    if (isAuthenticated) {
      next(); // If authenticated, proceed to the next middleware
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  
  module.exports = {
    isAuthenticated,
  };
  