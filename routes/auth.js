const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/auth/signup', authController.signUp);
router.post('/auth/signin', authController.signIn);

module.exports = router;