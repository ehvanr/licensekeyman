var dbConnection = require("./dbConnector.js");
 
module.exports = {
	
    checkLicense: function (licensekey, email, appID, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys inner join users on users.userID = applicationkeys.userID where `Key` = ? and users.UserEmail = ? and applicationkeys.applicationID = ?;', [licensekey, email, appID], function(err, result) {
			
			// Check if there's a record
			if(result === undefined || result.length < 1){
				cb({"ERROR":"No Records","CODE":1000});
			}else{
				// Check if the key is in use
				if(result[0].InUse === 1){
					
					// Check if email matches the returned value
					if(result[0].UserEmail == email){
						
                        var Today = new Date();
						
                        // Check if we are still within normal date range
						if((result[0].Issued < Today) && (result[0].Expires > Today)){
							cb({"SUCCESS":"License Validated","CODE":2000});
						}else{
							// We are not within range
							cb({"ERROR":"Licence not active","CODE":1003});
						}
					}else{
						// Invalid email tried to register, audit here
						cb({"ERROR":"Invalid credentials","CODE":1002});
					}
				}else{
					// Respond with license key is not registered, please register at different API endpoint
					cb({"ERROR":"License Key is not registerd.","CODE":1001});
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
	    dbConnection.connection.query('insert into users (UserName, UserEmail) VALUES (?, ?);', [user, email], function(err, result){
            console.log(err);
            if(err){
                cb({"ERROR":"User Added Failed","CODE":1004});    
            }else{
                cb({"SUCCESS":"User Added Successfully","CODE":2000});    
            }
        });	
    }
};
