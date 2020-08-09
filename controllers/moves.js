const api = 'https://pokeapi.co/api/v2/move'
const axios = require('axios');

const index = (req, res) => {
    axios
    .get(api + '/?limit=746')
    .then((response) => {
        res.json({
            moves: response.data.results
        });
    })
    .catch( (err) => {
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
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