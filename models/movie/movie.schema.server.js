var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    _id: String,
    name: String,
    status: String
}, {collection: 'movie'});

module.exports = movieSchema;