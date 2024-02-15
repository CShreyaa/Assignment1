// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, getBlogByAuthorId } = require('../controllers/blogController');
const { validateAuthorId } = require('../middleware/validationMiddleware');

// Get all blogs
router.get('/', getAllBlogs);

// Create blog
router.post('/', createBlog);

// Get blog by author ID
router.get('/:authorId', validateAuthorId, getBlogByAuthorId);

module.exports = router;
