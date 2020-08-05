const express = require('express');
const router = express.Router();
const generationsController = require('../controllers/generations');

router.get('/generations', generationsController.index);
router.get('/generations/:id', generationsController.show);

module.exports = router;