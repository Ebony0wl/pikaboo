const api = 'https://pokeapi.co/api/v2/item';
const axios = require('axios')

const index = (req, res) => {
    axios
    .get(api + '/?limit=954')
    .then((response) => {
        // res.json({
        //     items: response.data.results
        // });
        res.render('items/index.ejs', {
            items: response.data.results,    
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
        const foundItem = await axios.get(`${api}/${id}`);
        console.log(foundItem.data.names[7], '<-- english information')
        res.json({
            type: foundItem.data,
            name: foundItem.data.name,
            category_name: foundItem.data.category.name,
            sprites: foundItem.data.sprites
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