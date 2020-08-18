const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');

require('dotenv').config();

console.log(process.env);

const firebase = require('./config/firebase');

//for input form parsing
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const PORT = process.env.PORT || 3000;


// Express Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express will always look for ejs file views
// app.use(express.static(path.join(__dirname, 'public')));

//**Added functions to parse form data */
// for parsing application/json
app.use(express.json());

app.use(methodOverride('_method')); // must become before our routes for PUT/PATCH routes

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true })); // nested properties in JSON objects can be accessed
// form-urlencoded

// app.use(session({
//     secret: 'pikachu secret',
//     resave: false,
//     saveUninitialized: true
//   }));

// app.use((req, res, next) => {
//     res.locals.title = 'Pikaboo App';
//     res.locals.user = req.session.user;
//     next();
// })

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

const userRoutes = require('./routes/users');
app.use(userRoutes);

const authRoutes = require('./routes/auth');
app.use(authRoutes);

// for parsing multipart/form-data
app.use(upload.array());

app.get('/', (req, res) => {
    res.render('index.ejs');
    // res.status(200).json({
    //     message: 'root url needs to res.render home.ejs'
    // })
});

app.get('/signin', (req, res) => {
    res.render('signin/index');
});

app.get('/signup', (req, res) => {
    res.render('signup/index');
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});