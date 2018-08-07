var mongoose = require('mongoose');

var userMovieSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MovieModel'
    },
    status: String
}, {collection: 'user-movie'});

module.exports = userMovieSchema;