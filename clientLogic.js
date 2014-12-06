var dbConnection = require("./dbConnector.js");
 
module.exports = {
	
    checkLicense: function (licensekey, email, appID, cb){
		// Execute the query
		dbConnection.connection.query('SELECT * FROM applicationkeys INNER JOIN users ON users.userID = applicationkeys.userID WHERE `Key` = ? AND users.UserEmail = ? AND applicationkeys.applicationID = ?;', [licensekey, email, appID], function(err, result) {
			
			// Check if there's a record
			if(result === undefined || result.length < 1){
				cb({"ERROR":"No Records","CODE":4000});
			}else{
				// Check if the key is in use
				if(result[0].InUse === 1){
					
					// Check if email matches the returned value
					if(result[0].UserEmail == email){
						
                        var Today = new Date();
						
                        // Check if we are still within normal date range
						if((result[0].Issued < Today) && (result[0].Expires > Today)){
							cb({"SUCCESS":"License Validated","CODE":1000});
						}else{
							// We are not within range
							cb({"ERROR":"Licence not active","CODE":4001});
						}
					}else{
						// Invalid email tried to register, audit here
						cb({"ERROR":"Invalid credentials","CODE":4002});
					}
				}else{
					// Respond with license key is not registered, please register at different API endpoint
					cb({"ERROR":"License Key is not registerd.","CODE":4003});
				}
			}
		});
		
	},
   

    registerApplication: function(licensekey, email, appID, cb){
		
        checkLicense(licensekey, email, appID, function(data){
                
            if(data.CODE === 1001){
                // License key is not registered, so we register it here
                
                dbConnection.connection.query("update "); 
            
                cb(data);
            }else{
                cb({"ERROR":"","CODE":""});
            }
                
        });
    },

    registerUser: function(user, email, cb){
	    dbConnection.connection.query('INSERT INTO users (UserName, UserEmail) VALUES (?, ?);', [user, email], function(err, result){
            if(err){
                cb({"ERROR":"User Added Failed","CODE":4004});    
            }else{
                cb({"SUCCESS":"User Added Successfully","CODE":1000});
            }
        });	
    }
};
