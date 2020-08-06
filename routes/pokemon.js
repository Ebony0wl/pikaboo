const express = require('express');
const router = express.Router();
const pokemonsController = require('../controllers/pokemons');

router.get('/pokemon', pokemonsController.index);
router.get('/pokemon/:id', pokemonsController.show);

module.exports = router;