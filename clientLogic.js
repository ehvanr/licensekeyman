var dbConnection = require("./dbConnector.js");
 
module.exports = {
	
    checkLicense: function (licensekey, email, appID, cb){
		// Execute the query

        dbConnection.connection.query('SELECT * FROM applicationkeys INNER JOIN users ON users.userID = applicationkeys.userID WHERE `Key` = ? AND users.UserEmail = ? AND applicationkeys.applicationID = ?;', [licensekey, email, appID], function(err, result) {
            
            // Check if there's a record
            if(result === undefined || result.length < 1){
                cb({"STATUS":"No Records","CODE":4001});
            }else{
                // Check if the key is in use
                if(result[0].InUse === 1){
                    
                    // Check if email matches the returned value
                    if(result[0].UserEmail == email){
                        
                        var Today = new Date();
                        
                        // Check if we are still within normal date range
                        if((result[0].Issued < Today) && (result[0].Expires > Today)){
                            cb({"STATUS":"License Valid","CODE":1000});
                        }else{
                            // We are not within range
                            cb({"STATUS":"Licence not active","CODE":4002});
                        }
                    }else{
                        // Invalid email tried to register, audit here
                        cb({"STATUS":"Invalid credentials","CODE":4003});
                    }
                }else{
                    // Respond with license key is not registered, please register at different API endpoint
                    cb({"STATUS":"License Key is not registered.","CODE":4004});
                }
            }
        });
	},

    registerApplication: function(licensekey, email, appID, cb){
        
        dbConnection.connection.query('SELECT * FROM applicationkeys WHERE `Key` = ?;', [licensekey], function(err, result){
            if(result === undefined || result.length < 1){
                cb({"STATUS":"No Records","CODE":4001});
            }else{
                if(result[0].InUse === 0){

                    // License key is not registered, so we register it here
                    dbConnection.connection.query('SELECT * FROM users where UserEmail = ?;', [email], function(err, result2){
                        
                        if(result2 === undefined || result2.length < 1){
                            cb({"STATUS":"No Record of User","CODE":4006});
                        }else{
                            if(result2.length > 1){
                                // We have more than one user that matches that email address.... what to do?
                                cb({"STATUS": "More Than One User Found","CODE":4007});
                            }else{ 
                                userID = result2[0].UserID;

                                // Using the update command, register the application
                                dbConnection.connection.query("update applicationkeys set UserID = ?, InUse = 1, Issued = NOW(), Expires = DATE_ADD(NOW(),INTERVAL 1 YEAR) where `Key` = ? and ApplicationID = ?;", [userID, licensekey, appID], function(err,result3){
                                    if(result3 === undefined || result3.length < 1){
                                        cb({"STATUS":"No Records","CODE":4001});
                                    }else{
                                        if(err){
                                            // Error why
                                            cb({"STATUS":"Error","CODE":4010});
                                        }else{
                                            if(result3.changedRows === 1){
                                                cb({"STATUS":"Application Registered","CODE":1001});
                                            }else{
                                                cb({"STATUS":"Nothing Changed","CODE":4009});
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }); 
                }else{
                    cb({"STATUS": "Key Is Already In Use","CODE":4008});
                }
            }
        });

    },

    registerUser: function(user, email, cb){
	    dbConnection.connection.query('INSERT INTO users (UserName, UserEmail) VALUES (?, ?);', [user, email], function(err, result){
            if(err){
                cb({"STATUS":"User Added Failed","CODE":4005});    
            }else{
                cb({"STATUS":"User Added Successfully","CODE":1002});
            }
        });	
    }
};
