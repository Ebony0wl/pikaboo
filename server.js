const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;


require('dotenv').config();

// Express Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express will always look for ejs file views
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(methodOverride('_method')); // must become before our routes for PUT/PATCH routes
app.use(express.urlencoded({ extended: true })); // nested properties in JSON objects can be accessed

app.use(express.static(path.join(__dirname, 'public')));

const pokemonsRoutes = require('./routes/pokemon');
app.use(pokemonsRoutes);

const locationsRoutes = require('./routes/location');
app.use(locationsRoutes);

const generationsRoutes = require('./routes/generations');
app.use(generationsRoutes);

const evolutionsRoutes = require('./routes/evolutions');
app.use(evolutionsRoutes);

const typesRoutes = require('./routes/types');
app.use(typesRoutes);

const mapsRoutes = require('./routes/maps');
app.use(mapsRoutes);

const itemsRoutes = require('./routes/items');
app.use(itemsRoutes);

const movesRoutes = require('./routes/moves');
app.use(movesRoutes);


app.get('/', (req, res) => {
    res.render('index')
    // res.status(200).json({
    //     message: 'root url needs to res.render home.ejs'
    // })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});