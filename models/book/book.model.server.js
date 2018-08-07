var mongoose = require('mongoose');
var bookSchema = require('./book.schema.server');
var bookModel = mongoose.model('bookModel', bookSchema);

function findbookByCredentials(credentials) {
    return bookModel.findOne(credentials, {bookname: 1});
}

function findbookBybookname(bookname) {
    return bookModel.findOne({bookname: bookname});
}

function findbookById(bookId) {
    return bookModel.findById(bookId);
}

function createbook(book) {
    return bookModel.create(book);
}

function findAllbooks() {
    return bookModel.find();
}

var api = {
    createbook: createbook,
    findAllbooks: findAllbooks,
    findbookById: findbookById,
    findbookByCredentials: findbookByCredentials,
    findbookBybookname: findbookBybookname
};

module.exports = api;