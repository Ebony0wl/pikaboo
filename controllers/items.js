const api = 'https://pokeapi.co/api/v2/item';
const axios = require('axios')

const index = (req, res) => {
    axios
    .get(api + '/?limit=954')
    .then((response) => {
        res.json({
            items: response.data.results
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

const show = async (req, res) => {
    res.json({
        message: 'You are hitting the items show route! This will display one item.'
    })
}

module.exports = {
    index,
    show
}