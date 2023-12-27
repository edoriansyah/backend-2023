// import mysql
const mysql = require('mysql');

// import dotenv
require('dotenv').config();

// destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// membuat koneksi database
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

// menghubungkan ke database
db.connect((err) => {
    if(err){
        console.log("Error connecting database ..." + err.stack);
        return;
    }else{
        console.log("Database connected ...");
        return;
    }
});

module.exports = db;