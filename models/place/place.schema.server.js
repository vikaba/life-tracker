var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
    _id: String,
    city: String,
    country: String,
    status: String
}, {collection: 'place'});

module.exports = placeSchema;