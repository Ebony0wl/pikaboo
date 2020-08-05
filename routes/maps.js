const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/maps');

router.get('/maps', mapsController.index);
router.get('/maps/:id', mapsController.show);

module.exports = router;