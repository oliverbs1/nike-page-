var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql');
app.drivers.express.init();

app.controllers = {};
app.controllers.routes = require('./controllers/routes')(app);

app.models = {};
app.models.voting = require('./models/voting');
app.models.candidat = require('./models/candidat');
app.models.vote = require('./models/vote');