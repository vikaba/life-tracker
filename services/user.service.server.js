module.exports = function (app) {
    app.get('/api/user', findAllUsers);
    app.get('/api/user/:userId', findUserById);
    app.post('/api/user', createUser);
    app.post('/api/logout', logout);
    app.post('/api/login', login);

    var userModel = require('../models/user/user.model.server');

    function login(req, res) {
        var credentials = req.body;
        userModel
            .findUserByCredentials(credentials)
            .then(function(user) {
                if (user) {
                    req.session['currentUser'] = user;
                    res.json(user);
                } else {
                    res.sendStatus(401);
                }
            })
    }

    function logout(req, res) {
        req.session.destroy();
        res.sendStatus(200);
    }

    function findUserById(req, res) {
        var id = req.params['userId'];
        userModel.findUserById(id)
            .then(function (user) {
                res.json(user);
            })
    }

    function createUser(req, res) {
        var user = req.body;
        console.log(user.username);
        console.log((userModel.findUserByUsername(user.username)));
        if (userModel.findUserByUsername(user.username) === null) {
            res.sendStatus(409);
            console.log("errored")
        } else {
            userModel.createUser(user)
                .then(function (user) {
                    req.session['currentUser'] = user;
                    res.send(user)
                });
        }
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.send(users);
            })
    }
}