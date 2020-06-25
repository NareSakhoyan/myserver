const mysql = require('mysql2');
const dbConfig = require('./db.config')
const db = mysql.createConnection(dbConfig);

//Connect to mysql
exports.connectDatabase = (dbName = dbConfig.database) => {
    console.log('connecting to db')
    db.connect(err => {
        if (err) throw err;
        console.log("Connected!");
    });
    this.create(dbName)
}

//Create or use database
exports.create = (dbName) => {
    console.log('cretaingn new database')
    let sql = `use ${dbName}`;
    db.query(sql, function (err, result) {
        if (err) {
            sql = `create database ${dbName};`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log('result: ', result)
            })
        }
        console.log("Result: " + result);
    })
}

exports.writeQuery = (sql, req, res) => {
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}