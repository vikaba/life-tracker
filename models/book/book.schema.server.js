var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    status: String
}, {collection: 'book'});

module.exports = bookSchema;