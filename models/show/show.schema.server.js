var mongoose = require('mongoose');

var showSchema = mongoose.Schema({
    name: String
}, {collection: 'show'});

module.exports = showSchema;