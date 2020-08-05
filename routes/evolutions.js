const express = require('express');
const router = express.Router();
const evolutionsController = require('../controllers/evolutions');

router.get('/evolutions', evolutionsController.index);
router.get('/evolutions/:id', evolutionsController.show);

module.exports = router;