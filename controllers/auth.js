const User = require('../models/Users');

const firebase = require('../config/firebase');
const { auth } = require('firebase');

const signUp = (req, res, next) => {
    console.log(req.body, ' <-- req.body');
    firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
    .then( (authUser) => {
        console.log(authUser.user.uid);
        firebase.doCreateUser(authUser.user.uid ,{
            email: req.body.email,
            username: req.body.username
        }).then(snapShot => {
            res.redirect(`/users/${authUser.user.uid}`);
        }).catch(err => {
            console.log(err);
        })
    })
    .catch( (err) => {
        req.app.locals.err = err.message
        res.redirect('/signup');
    })
}

const signIn = (req, res) => {
    firebase.doSignInWithEmailAndPassword(req.body.email, req.body.password)
    .then(authUser => {
        console.log(authUser)
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