const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String },
    displayName: { type: String },
    imgUrl: { type: String },
    favorites: [
        // favorite pokemon goes here
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;