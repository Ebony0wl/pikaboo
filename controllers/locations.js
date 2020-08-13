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
        res.render('error', {err});
        console.log(err);
        // res.json ({
        //     status: 500,
        //     message: 'Internal Server Error'
        // });
    });
};

const show = async (req, res) => {
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundLocation = await axios.get(`${api}/${id}`);
        console.log(foundLocation.data, '<-- english information')
        res.json({
            location: foundLocation.data,
            name: foundLocation.data.name,
            url: foundLocation.data.url,
            region: foundLocation.data.region
        });
    } catch (err) {
        res.render('error', {err});
        console.log(err);
        // res.json ({
        //     status: 500,
        //     message: 'Internal Server Error'
        // });
    }
};

module.exports = {
    index,
    show
}