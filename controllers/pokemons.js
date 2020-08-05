const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of pokemon!');
};

const show = (req, res) => {
    res.json('this will render a specific pokemon!');
};

module.exports = {
    index,
    show
}