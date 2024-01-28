/* const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '919005004'
});

module.exports = pool.promise(); */

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '919005004', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;