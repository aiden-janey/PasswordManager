const mongoose = require('mongoose');
const { Password } = require('./password');

let User = mongoose.model('User', {
    username: {type: String},
    password: {type: String},
    passwordList: {type: [Password]}
});

module.exports = { User };