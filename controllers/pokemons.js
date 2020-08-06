const api = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');

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
    .get(api + '?limit=50&offset=0')
    .then( (response) => {
        res.json({
            pokemon: response.data.results
        });
    })
    .catch( (err) => {
        console.log(err);
        res.json ({
            status: 404,
            message: 'Internal Server Error'
        });
    });
};

const show = (req, res) => {
    res.json('this will render a specific pokemon!');
};

module.exports = {
    index,
    show
}