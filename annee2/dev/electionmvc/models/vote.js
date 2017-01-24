module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'vote';

    this.id = data.id || null;
    this.idvotant = data.idvotant || null;
    this.vote = data.vote || null;

    this.get = function (cb) {
        var q = "SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }

    this.register = function (cb) {
        var me = this;
        var q = "INSERT INTO " + this.table + " (idvotant, vote) VALUES ('" + this.idvotant + "', '" + this.vote + "')";

        mysql.query(q, function (rows) {
            me.id = rows.insertId;
            cb(me);
        });
    }

    return this;
}