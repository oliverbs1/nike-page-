module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'voting';

    this.id = data.id || null;
    this.firstname = data.firstname || null;
    this.lastname = data.lastname || null;
    this.age = data.age || null;

    this.get = function (cb) {
        var q = "SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }

    this.register = function (cb) {
        var me = this;
        var q = "INSERT INTO " + this.table + " (firstname, lastname, age) VALUES ('" + this.firstname + "', '" + this.lastname + "', '" + this.age + "')";

        mysql.query(q, function (rows) {
            me.id = rows.insertId;
            cb(me);
        });
    }

    return this;
}