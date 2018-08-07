var mongoose = require('mongoose');
var movieSchema = require('./movie.schema.server');
var movieModel = mongoose.model('movieModel', movieSchema);

function findmovieByCredentials(credentials) {
    return movieModel.findOne(credentials, {moviename: 1});
}

function findmovieBymoviename(moviename) {
    return movieModel.findOne({moviename: moviename});
}

function findmovieById(movieId) {
    return movieModel.findById(movieId);
}

function createmovie(movie) {
    return movieModel.create(movie);
}

function findAllmovies() {
    return movieModel.find();
}

var api = {
    createmovie: createmovie,
    findAllmovies: findAllmovies,
    findmovieById: findmovieById,
    findmovieByCredentials: findmovieByCredentials,
    findmovieBymoviename: findmovieBymoviename
};

module.exports = api;