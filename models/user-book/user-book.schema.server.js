var mongoose = require('mongoose');

var userBookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookModel'
    },
    status: String
}, {collection: 'user-book'});

module.exports = userBookSchema;