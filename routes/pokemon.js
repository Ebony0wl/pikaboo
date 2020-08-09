const express = require('express');
const router = express.Router();
const pokemonsController = require('../controllers/pokemons');

//to parse through form data
router.use(express.urlencoded({extended: true}));
  

router.post('/pokemon', pokemonsController.index);
router.get('/pokemon/:id', pokemonsController.show);


module.exports = router;
