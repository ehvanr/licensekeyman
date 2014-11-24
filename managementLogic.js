var dbConnection = require("./dbConnector.js");
 
module.exports = {
	executeTestQuery: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT `Key`, users.UserName, applications.ApplicationName, Issued, Expires FROM applicationkeys INNER JOIN users ON applicationkeys.UserID = users.UserID INNER JOIN applications ON applicationkeys.ApplicationID = applications.ApplicationID ORDER BY Expires;', null, function(err, result) {
			cb(result);
		});
	},
	
	getApplications: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applications;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	getKeysByApplication: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys where applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
	
	getActiveKeys: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys where InUse = 1 and applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getInActiveKeys: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys where InUse = 0 and applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getUsersBasedOnApplication: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys inner join users on applicationkeys.UserID = users.UserID where applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getActiveUsers: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select distinct users.UserID, users.UserName, users.UserEmail from users inner join applicationkeys on users.UserID = applicationkeys.UserID;', null, function(err, result) {
			cb(result);
		});
		
	},

    getInActiveUsers: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys inner join users on applicationkeys.UserID = users.UserID where applicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	}
};
