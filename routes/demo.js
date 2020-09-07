const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demo');

router.get('/demo', demoController.demo);//main snap mini interface
router.get('/demo/evolve', demoController.show);//a page for evolution animations
router.get('/demo/index', demoController.index); // test to make sure we're getting the right evolution chains

module.exports = router;