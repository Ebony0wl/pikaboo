const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

/*
    Tuesday, 11 August, 2020
    Will wait for firebase authorization tutorial later today
*/

router.post('/signup', usersController.signUp);
router.get('/users/:id', usersController.show);

module.exports = router;