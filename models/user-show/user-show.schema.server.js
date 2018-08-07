var mongoose = require('mongoose');

var userShowSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShowModel'
    },
    status: String
}, {collection: 'user-show'});

module.exports = userShowSchema;