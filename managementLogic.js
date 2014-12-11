var dbConnection = require("./dbConnector.js");
 
module.exports = {
	executeTestQuery: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT `Key`, users.UserName, applications.ApplicationName, Issued, Expires FROM applicationkeys INNER JOIN users ON applicationkeys.UserID = users.UserID INNER JOIN applications ON applicationkeys.ApplicationID = applications.ApplicationID ORDER BY Expires;', null, function(err, result) {
			cb(result);
		});
	},
	
	getApplications: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM applications;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	getKeysByApplication: function (appID, cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
	
	getActiveKeys: function (appID, cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE InUse = 1 AND ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
	getKeys: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM Applicationkeys;', null, function(err, result) {
			cb(result);
		});
	},
    
    getInActiveKeys: function (appID, cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM Applicationkeys WHERE InUse = 0 AND ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
    getUsersBasedOnApplication: function (appID, cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM Applicationkeys INNER JOIN Users ON Applicationkeys.UserID = users.UserID WHERE ApplicationID = ?', [appID], function(err, result) {
			cb(result);
		});
		
	},
   
	getUsers: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM users;', null, function(err, result) {
			cb(result);
		});
	},
    
    getActiveUsers: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT DISTINCT Users.UserID, users.UserName, users.UserEmail FROM Users INNER JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID;', null, function(err, result) {
			cb(result);
		});
		
	},

    getInActiveUsers: function (cb){
		// Execute the query
		dbConnection.connection.query('SELECT Users.UserID, users.UserName, users.UserEmail FROM Users LEFT JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID WHERE Applicationkeys.UserID IS NULL;', null, function(err, result) {
			cb(result);
		});
		
	},

    /**
     * [removeApplication] application/remove
     *      appID
     * [renameApplication] application/rename
     *      appID, newName
     * [addApplication] application/add
     *      appName
     * 
     * [deleteUser] user/delete
     *      userID
     * [changeUserName] user/change_name
     *      userID, newName
     * [changeUserEmail] user/change_email
     *      userID, newEmail
     * 
     * [deleteKey] key/delete
     *      key, appID
     * [addKeys] key/add_amount
     *      keyAmount
     * [disassociateUser] key/disassociate_user
     *      userID, appID, key
     **/

    // DONE - UNCHECKED 
    // * ERROR CHECKING
    removeApplication: function (appID, cb){
		// Execute the query
		
        dbConnection.connection.query('DELETE FROM applicationkeys WHERE applicationID = ?;', [appID], function(err, result) {
            dbConnection.connection.query('DELETE FROM applications WHERE applicationID = ?;', [appID], function(err, result) {
                cb(result);
            });
        });

	},

    // DONE - UNCHECKED 
    renameApplication: function (appID, newName, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE applications SET ApplicationName = ? WHERE ApplicationID = ?;', [newName, appID], function(err, result) {
            cb(result);
		});
		
	},

    // DONE - UNCHECKED 
    addApplication: function (appName, cb){
		// Execute the query
		dbConnection.connection.query('INSERT INTO applications (ApplicationName) VALUES (?);', [appName], function(err, result) {
			cb(result);
		});
		
	},

    // DONE - UNCHECKED 
    // * ERROR CHECKING
    removeUser: function (userID, cb){
		// Execute the query
		dbConnection.connection.query('DELETE FROM applicationkeys WHERE userID = ?;', [userID], function(err, result) {
            dbConnection.connection.query('DELETE FROM users WHERE userID = ?;', [userID], function(err, result) {
                cb(result);
            });
        });

		
	},

    // DONE - UNCHECKED 
    changeUserName: function (userID, newName, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE users SET userName = ? WHERE UserID = ?;', [newName, userID], function(err, result) {
			cb(result);
		});
		
	},
    
    // DONE - UNCHECKED 
    changeUserEmail: function (userID, newEmail, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE users SET userEmail = ? WHERE UserID = ?;', [newEmail, userID], function(err, result) {
			cb(result);
		});
		
	},
    
    // DONE - UNCHECKED  
    removeKey: function (key, appID, cb){
		// Execute the query
		dbConnection.connection.query('DELETE FROM applicationkeys WHERE `Key` = ? AND applicationID = ?;', [key, appID], function(err, result) {
			cb(result);
		});
		
	},
    
    // Add a lot of keys.  Generate random data, md5 it and make new key for specific app. 
    addKeys: function (appID, keyAmount, cb){
		// Execute the query
		dbConnection.connection.query('SELECT Users.UserID, users.UserName, users.UserEmail FROM Users LEFT JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID WHERE Applicationkeys.UserID IS NULL;', null, function(err, result) {
			cb(result);
		});
		
	},
    
    disassociateUser: function (userID, appID, key, cb){
		// Execute the query
		dbConnection.connection.query('SELECT Users.UserID, users.UserName, users.UserEmail FROM Users LEFT JOIN Applicationkeys ON Users.UserID = applicationkeys.UserID WHERE Applicationkeys.UserID IS NULL;', null, function(err, result) {
			cb(result);
		});
		
	}
};
