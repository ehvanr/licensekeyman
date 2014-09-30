var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testpassword',
  database : 'licensekeyman',
});

connection.connect(function(err) {
  if(err !== null){
	console.log(err);
  }
});

exports.connection = connection;