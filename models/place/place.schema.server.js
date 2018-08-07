var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
    city: String,
    country: String
}, {collection: 'place'});

module.exports = placeSchema;