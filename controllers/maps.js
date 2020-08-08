const api = 'https://pokeapi.co/api/v2/region';
const axios = require('axios');
const { response } = require('express');

const index = (req, res) => {
    axios
    .get(api)
    .then( (response) => {
        res.json({
            maps: response.data.results
        })
    })
    .catch( (err) => {
        console.log(err);
        res.json({
            status: 500,
            message: 'Internal Server Error'
        });
    });
}

const show = (req, res) => {
    res.json('this will render a specific map!');
}

module.exports = {
    index,
    show
}