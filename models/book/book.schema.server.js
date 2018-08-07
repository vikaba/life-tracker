var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: String,
    author: String
}, {collection: 'book'});

module.exports = bookSchema;