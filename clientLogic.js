var dbConnection = require("./dbConnector.js");
 
module.exports = {
	executeTestQuery: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys;', null, function(err, result) {
			cb(result);
		});
		
	} 
};