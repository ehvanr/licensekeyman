var dbConnection = require("./dbConnector.js");
 
module.exports = {
	executeTestQuery: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	getApplications: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applications;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	getKeys: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys where applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	}
};