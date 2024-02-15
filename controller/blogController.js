const getAllBlogs = (req, res) => {
    res.send('Get all blogs');
  };
  
  const createBlog = (req, res) => {
    res.send('Create blog');
  };
  
  const getBlogByAuthorId = (req, res) => {
    res.send('Get blog by author ID');
  };
  
  module.exports = {
    getAllBlogs,
    createBlog,
    getBlogByAuthorId,
  };
  