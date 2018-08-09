var mongoose = require('mongoose');
var placeSchema = require('./place.schema.server');
var placeModel = mongoose.model('placeModel', placeSchema);

function findplaceByCredentials(credentials) {
    return placeModel.findOne(credentials, {placename: 1});
}

function findplaceByplacename(placename) {
    return placeModel.findOne({placename: placename});
}

function findplaceById(placeId) {
    return placeModel.findById(placeId);
}

function createplace(place) {
    return placeModel.create(place);
}

function findAllplaces() {
    return placeModel.find();
}

var api = {
    createplace: createplace,
    findAllplaces: findAllplaces,
    findplaceById: findplaceById,
    findplaceByCredentials: findplaceByCredentials,
    findplaceByplacename: findplaceByplacename
};

module.exports = api;