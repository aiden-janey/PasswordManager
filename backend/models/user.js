const mongoose = require('mongoose');
const Password = require('./password')

const schema = new mongoose.Schema({
    username: 'string',
    password: 'string',
    passwordList: [Password]
});

const User = mongoose.model('User', schema);

module.exports = { User };