const api = 'https://pokeapi.co/api/v2/';

const index = (req, res) => {
    res.json('this will render a list of generations!');
}

const show = (req, res) => {
    res.json('this will render a specific generation!');
}

module.exports = {
    index,
    show
}