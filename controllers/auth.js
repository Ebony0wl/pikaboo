const User = require('../models/Users');
const api = 'https://pokeapi.co/api/v2/pokemon/'
const firebase = require('../config/firebase');
const { auth } = require('firebase');

function randomElement(arr) {
    min = 0
    max = arr.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


// SignUp currently catches error with id is not defined
const signUp = (req, res, next) => {
    console.log(req.body, ' <-- req.body');
    req.app.locals.err = '';

    const babyPokemon = ['bulbasaur', 'charmander', 'squirtle'];
    const heldPokemonName = babyPokemon[randomElement(babyPokemon)];


    firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
    .then( (authUser) => {
        console.log(authUser);
        console.log(authUser.user.uid);
        firebase.doCreateUser(authUser.user.uid, {
            email: req.body.email,
            id: authUser.user.uid,
            username: req.body.username,
            heldPokemonName: heldPokemonName,
        }).then(snapShot => {
            // res.redirect(`/users/${authUser.user.uid}`);
            console.log('we are about to got to req.session.user in this promise')
            req.session.user = {
                email: req.body.email,
                id: authUser.user.uid,
                heldPokemon: authUser.user.heldPokemon
            }
            console.log(req.session.user, ' <-- req.session.user')
            
            res.redirect(`/users/${authUser.user.uid}`);
           
        }).catch(err => {
            console.log(err);
        });
    })
    .catch( (err) => {
        req.app.locals.err = err.message
        console.log(err)
        res.redirect('/signup');
    })

}

const signIn = (req, res) => {
    req.app.locals.err = '';
    firebase.doSignInWithEmailAndPassword(req.body.email, req.body.password)
    .then(authUser => {
        console.log(authUser);
        req.session.user = {
            id: authUser.user.uid,
        }
        res.redirect(`/users/${authUser.user.uid}`);
    })
    .catch(err => {
        console.log(err);
        res.app.locals.err = err.message;
        res.redirect('/signin');
    });
}

module.exports = {
    signUp,
    signIn
}