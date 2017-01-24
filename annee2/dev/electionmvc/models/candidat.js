module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'candidat';

    this.id = data.id || null;
    this.firstname = data.firstname || null;
    this.lastname = data.lastname || null;
    this.age = data.age || null;
    this.partie = data.partie || null;

    this.get = function (cb) {
        var q = "SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }

    return this;
}