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

const post = (req, res) => {
    axios
    //.get(api + '?limit=151&offset=0')
    .get(api)
    .then( (response) => {
        // res.json({
        //     pokemon: response.data.results
        // });

        //render the ejs file
        const input = req.body.searchInput;
        console.log(input);
        res.render('pokemons/index', {url: input});

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
        // res.json({
        //     pokemon: foundPokemon.data,
        //     name: foundPokemon.data.forms[0].name,
        //     type: foundPokemon.data.types,
        //     species: foundPokemon.data.species
        // });
        const pokemon = foundPokemon.data;
        const name = foundPokemon.data.forms[0].name;
        const type = foundPokemon.data.types;
        const species = foundPokemon.data.species;
        const speciesURL = foundPokemon.data.species.url;

        //pokemon-species
        const foundSpecies = await axios.get(speciesURL);
        // res.json({
        //         data: foundSpecies.data,
        //         evolutionURL: foundSpecies.data.evolution_chain.url,
        //         generation: foundSpecies.data.generation,
        //         generationURL: foundSpecies.data.generation.url
        //      });
       
        const speciesData = foundSpecies.data;
        const evolutionURL = foundSpecies.data.evolution_chain.url;
        const generation = foundSpecies.data.generation;
        const generationURL = foundSpecies.data.generation.url;

        //evolution-chain
        const foundEvolution = await axios.get(evolutionURL);
        // res.json({
        //         data: foundEvolution.data,
        //         chain: foundEvolution.data.chain // data is in nested 'evolves_to' groups 
        //      });
        const data = foundEvolution.data;
        const chain = foundEvolution.data.chain; // data is in nested 'evolves_to' groups 


        //Generation
        const foundGeneration = await axios.get(generationURL);
        

//{“linktojson”: “filelink.json”}

        res.render('pokemons/pokemon.ejs', {
            name: name,
            type: type
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
    post,
    show
}