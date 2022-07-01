const mongoose = require('mongoose');
import { Password } from './password.js';

var User = mongoose.model('User', {
    username: {type: String},
    password: {type: String},
    passwordList: (type: [Password])
});

module.exports = { User };