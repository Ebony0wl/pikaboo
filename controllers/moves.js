const api = 'https://pokeapi.co/api/v2/move'
const axios = require('axios');

const index = (req, res) => {
    res.json({
        message: 'Index will render a list of moves!'
    });
}

const show = (req, res) => {
    res.json({
        message: 'Show will render a specific move!'
    })
}

module.exports = {
    index,
    show
}