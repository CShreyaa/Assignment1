// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const { validateLoginInput, validateRegisterInput } = require('../middleware/validationMiddleware');

// Login route
router.post('/login', validateLoginInput, login);

// Register route
router.post('/register', validateRegisterInput, register);

module.exports = router;
