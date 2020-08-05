const express = require('express');
const router = express.Router();
const generationsController = require('../controllers/generations');

router.get('/generations', locationsController.index);
router.get('/generations/:id', locationsController.show);

module.exports = router;