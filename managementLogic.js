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

    // -------------------------------------------------------------------- //
    // -------------------- MODIFICATION FUNCTIONS ------------------------ //
    // -------------------------------------------------------------------- //
    removeApplication: function (appID, cb){
		// Execute the query
		
        dbConnection.connection.query('DELETE FROM applicationkeys WHERE applicationID = ?;', [appID], function(err, result) {
            dbConnection.connection.query('DELETE FROM applications WHERE applicationID = ?;', [appID], function(err, result) {
                if(!err){
                    cb({"STATUS":"Application Removed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"Application Failed to be Removed","CODE":"3010"});
                }
            });
        });

	},

    // DONE - UNCHECKED 
    renameApplication: function (appID, newName, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE applications SET ApplicationName = ? WHERE ApplicationID = ?;', [newName, appID], function(err, result) {
                if(!err){
                    cb({"STATUS":"Application Renamed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"Application Failed to be Renamed","CODE":"3010"});
                }
		});
		
	},

    // DONE - UNCHECKED 
    addApplication: function (appName, cb){
		// Execute the query
		dbConnection.connection.query('INSERT INTO applications (ApplicationName) VALUES (?);', [appName], function(err, result) {
                if(!err){
                    cb({"STATUS":"Application Added","CODE":"2000"});        
                }else{
                    cb({"STATUS":"Application Failed to be Added","CODE":"3010"});
                }
		});
		
	},

    // DONE - UNCHECKED 
    // * ERROR CHECKING
    removeUser: function (userID, cb){
		// Execute the query
		dbConnection.connection.query('DELETE FROM applicationkeys WHERE userID = ?;', [userID], function(err, result) {
            dbConnection.connection.query('DELETE FROM users WHERE userID = ?;', [userID], function(err, result) {
                if(!err){
                    cb({"STATUS":"User Removed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"User Failed to be Removed","CODE":"3010"});
                }
            });
        });

		
	},

    // DONE - UNCHECKED 
    changeUserName: function (userID, newName, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE users SET userName = ? WHERE UserID = ?;', [newName, userID], function(err, result) {
                if(!err){
                    cb({"STATUS":"User Name Changed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"User Name Failed to be Changed","CODE":"3010"});
                }
		});
		
	},
    
    // DONE - UNCHECKED 
    changeUserEmail: function (userID, newEmail, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE users SET userEmail = ? WHERE UserID = ?;', [newEmail, userID], function(err, result) {
                if(!err){
                    cb({"STATUS":"User Email Changed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"User Email Failed to be Changed","CODE":"3010"});
                }
		});
		
	},
    
    // DONE - UNCHECKED  
    removeKey: function (key, appID, cb){
		// Execute the query
		dbConnection.connection.query('DELETE FROM applicationkeys WHERE `Key` = ? AND applicationID = ?;', [key, appID], function(err, result) {
                if(!err){
                    cb({"STATUS":"Key Removed","CODE":"2000"});        
                }else{
                    cb({"STATUS":"Key Failed to be Removed","CODE":"3010"});
                }
		});
		
	},
    
    // Add a lot of keys.  Generate random data, md5 it and make new key for specific app. 
    addKeys: function (appID, keyAmount, cb){
		// Execute the query
        failed = "test";

        for(var i = 0; i < keyAmount; i++){
            var genKey = generateRandomKey();
            
            dbConnection.connection.query('insert into applicationkeys (`Key`, ApplicationID) values (?, ?);', [genKey, appID], function(err, result){
            });
        }

        cb({"STATUS":"Successfully Added " + keyAmount + " Keys.","CODE":"2000"});
	},
    
    disassociateUser: function (appID, key, cb){
		// Execute the query
		dbConnection.connection.query('UPDATE applicationkeys SET UserID = NULL, InUse = 0, Issued = NULL, Expires = NULL WHERE `Key` = ? AND ApplicationID = ?;', [key, appID], function(err, result) {
            if(!err){
                cb({"STATUS":"User Disassociated","CODE":"2000"});        
            }else{
                cb({"STATUS":"User Failed to be Disassociated","CODE":"3010"});
            }
		});
		
	},
    
    addUser: function(userName, userEmail, cb){
	    dbConnection.connection.query('INSERT INTO users (UserName, UserEmail) VALUES (?, ?);', [userName, userEmail], function(err, result){
            if(!err){
                cb({"STATUS":"User Added","CODE":"2000"});        
            }else{
                cb({"STATUS":"User Failed to be Added","CODE":1002});
            }
        });
    }
};

function generateRandomKey(){
    var randString = randomHexValueOfLength(8) + "-" + randomHexValueOfLength(4) + "-" + randomHexValueOfLength(4) + "-" + randomHexValueOfLength(4) + "-" + randomHexValueOfLength(12);
    return randString;
}

function randomHexValueOfLength(length){
    var valueArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var tempString = '';

    for(i = 0; i < length; i++){
        tempString += valueArray[randomNumRange(0, 15)];
    }

    return tempString;
}

function randomNumRange(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
}
