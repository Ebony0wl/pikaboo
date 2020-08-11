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
    put,
    deleteUser
}