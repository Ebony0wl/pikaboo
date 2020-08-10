const express = require('express');
const router = express.Router();
const pokemonsController = require('../controllers/pokemons');

//to parse through form data
router.use(express.urlencoded({extended: true}));

router.get('/pokemon', pokemonsController.index);
router.post('/pokemon', pokemonsController.post);
router.get('/pokemon/:id', pokemonsController.show);


module.exports = router;
