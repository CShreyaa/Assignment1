const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const { validateLoginInput, validateRegisterInput } = require('../middleware/validationMiddleware');

router.post('/login', validateLoginInput, login);

router.post('/register', validateRegisterInput, register);

module.exports = router;
