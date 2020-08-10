const api = 'https://pokeapi.co/api/v2/type';
const axios = require('axios');

const index = (req, res) => {
    axios
    .get(api + '?limit=50&offset=0')
    .then((response) => {
        // res.json({
        //     types: response.data.results
        // });
        const types = response.data.results;
        res.render('types/index', {
            types 
        })

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
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundType = await axios.get(`${api}/${id}`);
        console.log(foundType.data.names[6], '<-- english information')
        res.json({
            type: foundType.data,
            name: foundType.data.names[6].name
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