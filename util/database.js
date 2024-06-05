const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'Target@123',
  port: 3307,
});

module.exports = pool.promise();
