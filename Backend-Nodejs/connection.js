const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'covid_compliance'
  })
  
  connection.connect()
  
  connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
  
    console.log('Connected The solution is: ', rows[0].solution)
  })

module.exports = connection;