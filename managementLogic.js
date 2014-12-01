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
		var query = dbConnection.connection.query('SELECT * FROM applications;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	getKeysByApplication: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
	
	getActiveKeys: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE InUse = 1 AND ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getInActiveKeys: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE InUse = 0 AND ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getUsersBasedOnApplication: function (appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT * FROM Applicationkeys INNER JOIN Users ON Applicationkeys.UserID = users.UserID WHERE ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getActiveUsers: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT DISTINCT Users.UserID, users.UserName, users.UserEmail FROM Users INNER JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID;', null, function(err, result) {
			cb(result);
		});
		
	},

    getInActiveUsers: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('SELECT Users.UserID, users.UserName, users.UserEmail FROM Users LEFT JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID WHERE Applicationkeys.UserID IS NULL;', null, function(err, result) {
			cb(result);
		});
		
	}
};
