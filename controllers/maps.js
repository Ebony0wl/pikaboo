const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of maps!');
}

const show = (req, res) => {
    res.json('this will render a specific map!');
}

module.exports = {
    index,
    show
}