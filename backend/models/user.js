const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: 'string',
    password: 'string',
    passwordList: []
});

const User = mongoose.model('User', schema);

module.exports = { User };