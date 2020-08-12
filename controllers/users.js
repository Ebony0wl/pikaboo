const User = require('../models/Users');

const firebase = require('../config/firebase');

const index = (req, res) => {
    console.log('Index GET Request on User resource');
    res.json({
        status: 'Success',
        message: 'You hit the users index route!'
    });
}

const post = async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        res.json(createdUser)
    } catch (err) {
        console.log(err);
        res.json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}

const signup = (req, res, next) => {
    console.log(req.body, ' <-- req.body');
    firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
    .then( (authUser) => {
        console.log(authUser);
    })
    .catch( (err) => {
        req.app.locals.err = err.message
        res.redirect('/');
    })
}

const put = async (req, res) => {
    try {
        console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        console.log(err);
        res.json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}

const deleteUser = (req, res) => {
    return console.log(
        `DELETE HTTP Request for user/${req.params.userId} resource`
    );
}

module.exports = {
    index,
    post,
    signup,
    put,
    deleteUser
}