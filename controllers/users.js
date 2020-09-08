const User = require('../models/Users');

const firebase = require('../config/firebase');
const { auth } = require('firebase');

const index = (req, res) => {
    console.log('Index GET Request on User resource');
    res.json({
        status: 'Success',
        message: 'You hit the users index route!'
    });
}

// NOT FOR FIREBASE - DO NOT RENDER
const post = async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        res.json(createdUser)
    } catch (err) {
        res.render('error', {err});
        console.log(err);
        // res.json({
        //     status: 500,
        //     message: 'Internal Server Error'
        // });
    }
}

// const signUp = (req, res, next) => {
//     console.log(req.body, ' <-- req.body');
//     firebase.doCreateUserWithEmailAndPassword(req.body.email, req.body.password)
//     .then( (authUser) => {
//         console.log(authUser.user.uid);
//         firebase.doCreateUser(authUser.user.uid ,{
//             email: req.body.email,
//             username: req.body.username
//         }).then(snapShot => {
//             res.redirect(`/users/${authUser.user.uid}`);
//         }).catch(err => {
//             console.log(err);
//         })
//     })
//     .catch( (err) => {
//         req.app.locals.err = err.message
//         res.redirect('/signup');
//     })
// }

const show = async (req, res) => {
    console.log(req.params.id, ' <-- req.params.id');
    // const user = await (await firebase.doGetUser(req.params.id)).data();
    console.log(user, ' <---- user');
    console.log(user.email, ' <--- email of user');
    console.log(req.session.user, ' <--- req.session.user');
    // req.session.user = {
    //     ...user,
    //     uid: req.params.id,
    // };
    res.render('users/show', {
        // user: user,
    });

}


const demo = async (req, res) => {

    res.redirect('./demo/');

}

// const signIn = (req, res) => {
//     firebase.doSignInWithEmailAndPassword(req.body.email, req.body.password)
//     .then(authUser => {
//         console.log(authUser)
//         res.redirect(`/users/${authUser.user.uid}`);
//     })
//     .catch(err => {
//         console.log(err);
//         res.app.locals.err = err.message;
//         res.redirect('/signin');
//     });
// }

// NOT FOR FIREBASE - DO NOT RENDER
const put = async (req, res) => {
    try {
        console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.render('error', {err});
        console.log(err);
        res.json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}

// NOT FOR FIREBASE - DO NOT RENDER
const deleteUser = (req, res) => {
    return console.log(
        `DELETE HTTP Request for user/${req.params.userId} resource`
    );
}

module.exports = {
    index,
    post,
    demo,
    show,
    put,
    deleteUser
}