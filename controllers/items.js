const api = 'https://pokeapi.co/api/v2/item';
const axios = require('axios')

const index = (req, res) => {
    res.json({
        message: 'You are hitting the items index route! This will display a list of items.'
    })
}

const show = async (req, res) => {
    res.json({
        message: 'You are hitting the items show route! This will display one item.'
    })
}

module.exports = {
    index,
    show
}