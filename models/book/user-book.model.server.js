var mongoose = require('mongoose');
var userModel = require('../user/user.model.server');

function addBookToUser(userId, book) {
    userModel.update(
        { _id: userId },
        { $push: { books: book } },
        done
    );
}

function findUserBooks(userId) {
    return userModel.findById(userId, {_id: false, books:true});
}

var api = {
    addBookToUser: addBookToUser,
    findUserBooks: findUserBooks,
};

module.exports = api;