var express = require("express"),
    mysql = require("./mysql");

module.exports = {
    server: null,

    init: function () {
        var app = express();

        app.listen(1337, function () {
            console.log('listening on *:1337');
        });

        this.server = app;

    }
}