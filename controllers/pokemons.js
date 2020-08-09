const api = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { response } = require('express');

// const config = {
//   method: 'get',
//   url: 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0',
//   headers: { 
//     'Cookie': '__cfduid=d20fc2ccf46f4d34c36ab082f14e3ad5a1596664571'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


const index = (req, res) => {
    axios
    .get(api + '?limit=151&offset=0')
    .then( (response) => {
        res.json({
            pokemon: response.data.results
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

const show = async (req, res) => {
    const id = req.params.id
    console.log(id)

    try { 
        const foundPokemon = await axios.get(`${api}/${id}`);
        // console.log(foundPokemon.data.forms[0].name);
        res.json({
            pokemon: foundPokemon.data,
            name: foundPokemon.data.forms[0].name
        });
    } catch (err) {
        res.json({
            status: 500,
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    index,
    show
}