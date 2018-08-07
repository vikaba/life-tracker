var mongoose = require('mongoose');

var userPlaceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlaceModel'
    },
    status: String
}, {collection: 'user-place'});

module.exports = userPlaceSchema;