const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/auth/signup', authController.signUp);
router.get('/auth/signin', authController.signIn);

module.exports = router;