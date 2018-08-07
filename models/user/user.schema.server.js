var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
}, {collection: 'user'});

module.exports = userSchema;