const express = require('express');
const router = express.Router();
const movesController = require('../controllers/moves');

router.get('/moves', movesController.index);
router.get('/moves/:id', movesController.show);

module.exports = router;