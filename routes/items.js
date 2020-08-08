const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items.js')

router.get('/items', itemsController.index);
router.get('/items/:id', itemsController.show);

module.exports = router;