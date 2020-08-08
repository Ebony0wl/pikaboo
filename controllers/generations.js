const api = 'https://pokeapi.co/api/v2/generation';
const axios = require('axios')

const index = (req, res) => {
    axios
    .get(api)
    .then((response) => {
        res.json({
            generations: response.data.results
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
    res.json('this will render a specific generation!');
}

module.exports = {
    index,
    show
}