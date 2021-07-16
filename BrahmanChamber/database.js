var mysql = require('mysql')

var connection;

function sqlConnector(){
connection = mysql.createConnection(
  {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'brahmanchamber'
})
return connection;
}

module.exports = { sqlConnector };