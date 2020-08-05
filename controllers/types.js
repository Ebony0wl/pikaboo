const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of types!');
}

const show = (req, res) => {
    res.json('this will render a specific type!');
}

module.exports = {
    index,
    show
}