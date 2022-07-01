const mongoose = require('mongoose');

var Password = mongoose.model('Password', {
    website: {type: String},
    username: {type: String},
    password: {type: String}
});

module.exports = { Password };