const User = require('../models/Users');

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