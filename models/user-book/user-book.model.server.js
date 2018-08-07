var mongoose = require('mongoose');
var userBookSchema = require('./user-book.schema.server');
var userBookModel = mongoose.model('UserBookModel', userBookSchema);

function findUserByCredentials(credentials) {
    return userModel.findOne(credentials, {username: 1});
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function createUser(user) {
    return userModel.create(user);
}

function findAllUsers() {
    return userModel.find();
}

var api = {
    createUser: createUser,
    findAllUsers: findAllUsers,
    findUserById: findUserById,
    findUserByCredentials: findUserByCredentials,
    findUserByUsername: findUserByUsername
};

module.exports = api;