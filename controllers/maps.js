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

const show = async (req, res) => {
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundMap = await axios.get(`${api}/${id}`);
        console.log(foundMap.data.names[5], '<-- english information')
        res.json({
            type: foundMap.data,
            name: foundMap.data.names[5].name,
            locations: foundMap.data.locations
        });
    } catch (err) {
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    index,
    show
}