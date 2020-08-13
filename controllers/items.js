const api = 'https://pokeapi.co/api/v2/item';
const axios = require('axios')

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const index = (req, res) => {
    axios
    .get(api + '/?limit=954')
    .then((response) => {
        // res.json({
        //     items: response.data.results
        // });
        let items= response.data.results;
        res.render('items/index.ejs', {
            items: shuffle(items)    
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
}

const show = async (req, res) => {
    const id = req.params.id;
    console.log(id, ' <-- req.params.id');

    try {
        const foundItem = await axios.get(`${api}/${id}`);
        console.log(foundItem.data.names[7], '<-- english information')
        // res.json({
        //     item: foundItem.data,
        //     name: foundItem.data.name,
        //     category_name: foundItem.data.category.name,
        //     sprites: foundItem.data.sprites,
        //     cost: foundItem.data.cost
        // });

        res.render('items/show', {
                type: foundItem.data,
                name: foundItem.data.name,
                category_name: foundItem.data.category.name,
                sprites: foundItem.data.sprites,
                cost: foundItem.data.cost
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