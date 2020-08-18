const User = require('../models/Users');

const firebase = require('../config/firebase');
const { auth } = require('firebase');

const signUp = (req, res, next) => {
    console.log(req.body, ' <-- req.body');
    req.app.locals.err = '';
    firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
    .then( (authUser) => {
        console.log(authUser.user.uid);
        firebase.doCreateUser(authUser.user.uid ,{
            email: req.body.email,
            username: req.body.username
        }).then(snapShot => {
            // res.redirect(`/users/${authUser.user.uid}`);
            req.session.user = {
                email: req.body.email,
                uid: authUser.user.uid
            }
            res.redirect('/')
        }).catch(err => {
            console.log(err);
        })
    })
    .catch( (err) => {
        req.app.locals.err = err.message
        console.log(err.message)
        res.redirect('/');
    })
}

const signIn = (req, res) => {
    req.app.locals.err = '';
    firebase.doSignInWithEmailAndPassword(req.body.email, req.body.password)
    .then(authUser => {
        console.log(authUser);
        req.session.user = {
            uid: authUser.user.uid,
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