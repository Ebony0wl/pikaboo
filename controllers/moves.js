const api = 'https://pokeapi.co/api/v2/move'
const axios = require('axios');

const index = (req, res) => {
    axios
    .get(api + '/?limit=746')
    .then((response) => {
        res.json({
            moves: response.data.results
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
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundMove = await axios.get(`${api}/${id}`);
        console.log(foundMove.data.names[7], '<-- english information')
        res.json({
            move: foundMove.data,
            name: foundMove.data.name,
            type: foundMove.data.type,
            accuracy: foundMove.accuracy
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