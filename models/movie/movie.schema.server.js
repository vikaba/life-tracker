var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    name: String
}, {collection: 'movie'});

module.exports = movieSchema;