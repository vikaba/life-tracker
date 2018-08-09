var mongoose = require('mongoose');

var showSchema = mongoose.Schema({
    _id: String,
    name: String,
    status: String
}, {collection: 'show'});

module.exports = showSchema;