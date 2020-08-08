const api = 'https://pokeapi.co/api/v2/location';
const axios = require('axios')

const index = (req, res) => {
    axios
    .get(api + '?limit=50&offset=0')
    .then((response) => {
        res.json({
            locations: response.data.results
        });
    })
    .catch( (err) => {
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
    });
};

const show = (req, res) => {
    res.json('this will render a specific location!');
};

module.exports = {
    index,
    show
}