const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');

router.get('/locations', locationsController.index);
router.get('/locations/:id', locationsController.show);

module.exports = router;