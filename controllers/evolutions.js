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
        res.render('error', {err});
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
    });
}

const show = async (req, res) => {
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundEvolution = await axios.get(`${api}/${id}`);
        console.log(foundEvolution.data, '<-- english information')
        res.json({
            evolution: foundEvolution.data,
            evolves_to: foundEvolution.data.chain.evolves_to,
            species: foundEvolution.data.species,
        });
    } catch (err) {
        res.render('error', {err});
        console.log(err);
        // res.json ({
        //     status: 500,
        //     message: 'Internal Server Error'
        // });
    }
}

module.exports = {
    index,
    show
}