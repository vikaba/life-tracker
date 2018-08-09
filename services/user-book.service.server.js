module.exports = function (app) {
    app.get('/api/user/:userId/book', findUserBooks);
    app.post('/api/user/:userId/book', addBookToUser);

    var userBookModel = require('../models/book/user-book.model.server');

    function addBookToUser(req, res) {
        var userId = req.params['userId'];
        var book = req.body;
        userBookModel.addBookToUser(userId, book)
            .then(function (book) {
                res.send(book)
            });
    }

    function findUserBooks(req, res) {
        var userId = req.params['userId'];
        userBookModel.findUserBooks(userId)
            .then(function (books) {
                res.send(books);
            })
    }
}