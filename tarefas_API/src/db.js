require('dotenv').config();

console.log(process.env.MYSQL_HOST);
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10, //5 - 10 for basic apis    
    connectTimeout: 10000
})

module.exports = pool;
