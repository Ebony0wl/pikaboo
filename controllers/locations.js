const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of locations!');
};

const show = (req, res) => {
    res.json('this will render a specific location!');
};

module.exports = {
    index,
    show
}