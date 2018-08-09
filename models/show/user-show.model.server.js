var mongoose = require('mongoose');
var showSchema = require('./show.schema.server');
var showModel = mongoose.model('showModel', showSchema);

function findshowByCredentials(credentials) {
    return showModel.findOne(credentials, {showname: 1});
}

function findshowByshowname(showname) {
    return showModel.findOne({showname: showname});
}

function findshowById(showId) {
    return showModel.findById(showId);
}

function createshow(show) {
    return showModel.create(show);
}

function findAllshows() {
    return showModel.find();
}

var api = {
    createshow: createshow,
    findAllshows: findAllshows,
    findshowById: findshowById,
    findshowByCredentials: findshowByCredentials,
    findshowByshowname: findshowByshowname
};

module.exports = api;