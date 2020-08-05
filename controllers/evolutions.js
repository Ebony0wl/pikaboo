const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of evolutions!');
}

const show = (req, res) => {
    res.json('this will render a specific evolution!');
}

module.exports = {
    index,
    show
}