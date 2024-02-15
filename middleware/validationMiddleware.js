const validateAuthorId = (req, res, next) => {
    const authorId = req.params.authorId;
    if (!Number.isInteger(parseInt(authorId))) {
      return res.status(400).json({ message: "Invalid author ID" });
    }
    next();
  };
  
  module.exports = {
    validateAuthorId,
  };
  