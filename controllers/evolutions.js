const api = 'https://pokeapi.co/api/v2/evolution-chain';
const axios = require('axios');

const index = (req, res) => {
    axios
    .get(api + '/?limit=419')
    .then((response) => {
        res.json({
            evolutions: response.data.results
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
    res.json('this will render a specific evolution!');
}

module.exports = {
    index,
    show
}