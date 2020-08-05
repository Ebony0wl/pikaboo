const express = require('express');
const router = express.Router();
const typesController = require('../controllers/types');

router.get('/types', typesController.index);
router.get('/types/:id', typesController.show);

module.exports = router;