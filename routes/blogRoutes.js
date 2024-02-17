const express = require('express');
const router = express.Router();
const { routerMiddleware } = require('../middleware/routerMiddleware');
const configurableMiddleware = require('../middleware/configurableMiddleware');

router.use(routerMiddleware);
router.use(configurableMiddleware('Config'));

const blogs = [];

// Get all blogs
router.get('/', (req, res) => {
  res.json(blogs);
});

// Create a new blog
router.post('/', (req, res) => {
  const { authorId, title, content } = req.body;

  if (!Number.isInteger(parseInt(authorId))) {
    return res.status(400).json({ message: 'Author id should be an integer' });
  }
  blogs.push({ authorId, title, content });
  res.status(201).json({ message: 'Blog successfully created' });
});

router.get('/:authorId', (req, res) => {
  const authorId = parseInt(req.params.authorId);
  if (!Number.isInteger(authorId)) {
    return res.status(400).json({ message: 'Author id should be an integer' });
  }
  const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
  res.json(authorBlogs);
});

module.exports = router;