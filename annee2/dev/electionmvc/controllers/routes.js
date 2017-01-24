var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express');

module.exports = function (app) {
    var server = app.drivers.express.server;

    server.use(bodyParser.json()); // to support JSON-encoded bodies
    server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    server.use('/asset', express.static(__dirname + '/../views/asset'));
    server.use('/images', express.static(__dirname + '/../views/images'));
    server.use('/js', express.static(__dirname + '/../views/js'));

    console.log(__dirname);

    server.get('/', function (req, res) {
        res.sendFile(path.resolve('views/election.html'));
    });

    server.post('/api/voting', function (req, res) {
        var voting = new app.models.voting(app, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
        });

        voting.register(function (rows) {
            res.send(rows);
        });
    });

    server.get('/api/voting', function (req, res) {
        var voting = new app.models.voting(app, {
            id: req.query.id
        });
        voting.get(function (rows) {
            res.send(rows);
        });
    });

    server.get('/api/candidat', function (req, res) {
        var candidat = new app.models.candidat(app, {
            id: req.query.id
        });
        candidat.get(function (rows) {
            res.send(rows);
        });
    });

    server.post('/api/vote', function (req, res) {
        var vote = new app.models.vote(app, {
            idvotant: req.body.idvotant,
            vote: req.body.vote
        });

        vote.register(function (rows) {
            res.send(rows);
        });
    });

    server.get('/api/vote', function (req, res) {
        var vote = new app.models.vote(app, {
            id: req.query.id
        });
        vote.get(function (rows) {
            res.send(rows);
        });
    });


}