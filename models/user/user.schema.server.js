var mongoose = require('mongoose');
var bookSchema = require('../book/book.schema.server');
var movieSchema = require('../movie/movie.schema.server');
var showSchema = require('../show/show.schema.server');
var placeSchema = require('../place/place.schema.server');

var userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    books: [bookSchema],
    movies: [movieSchema],
    shows: [showSchema],
    places: [placeSchema]
}, {collection: 'user'});

module.exports = userSchema;