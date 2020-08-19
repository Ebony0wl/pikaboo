const User = require('../models/Users');
const axios = require('axios');
const api = 'https://pokeapi.co/api/v2/pokemon/';
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
    const heldPokemonApi = api + 'heldPokemonName';
    
    // const heldPokemonData = axios.get(heldPokemonApi)
    //                         .then((response) => {
    //                         return response.data.results;
    //                         })
    //                         .catch( (err) => {
    //                             console.log(err, <--- ' heldPokemonData error')
    //                         })
    // console.log(heldPokemonData);
    // const heldPokemonObject = {
    //     species: heldPokemonData.name,
    //     timesFed: 0,
    //     evolutionLevel: 0,
    //     sprite: heldPokemonData.sprites,
    // }
                                


    firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
    .then( (authUser) => {
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
                heldPokemon: authUser.user.heldPokemonName,
                // heldPokemonData: authUser.user.heldPokemonData,
                // heldPokemonName: authUser.user.heldPokemonName,
                // heldPokemonSprite: authUser.user.heldPokemonSprite,
                // heldPokemonObject: authUser.user.heldPokemonObject
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
            email: req.body.email,
            id: authUser.user.uid,
            heldPokemon: authUser.user.heldPokemon,
            // heldPokemonData: authUser.user.heldPokemonData,
            // heldPokemonName: authUser.user.heldPokemonName,
            // heldPokemonSprite: authUser.user.heldPokemonSprite,
            // heldPokemonObject: authUser.user.heldPokemonObject
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