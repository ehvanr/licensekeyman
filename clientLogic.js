var dbConnection = require("./dbConnector.js");
 
module.exports = {
	executeTestQuery: function (cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys;', null, function(err, result) {
			cb(result);
		});
		
	},
	
	checkLicense: function (licensekey, email, cb){
		// Execute the query
		var query = dbConnection.connection.query('select * from applicationkeys inner join users on users.userID = applicationkeys.userID where `Key` = ? and users.UserEmail = ?;', [licensekey, email], function(err, result) {
			
			// If no value returned theres no record, if value returned: if not activated then activate, if activated check if expired, if not expired allow
			
			// Check if there's a record
			if(result.length < 1){
				cb({"ERROR":"No Records","ERROR_CODE":1000});
			}else{
				// Check if the key is in use
				if(result[0].InUse === 1){
					
					// Check if email matches the returned value
					if(result[0].UserEmail == email){
						
						// Check if we are still within normal date range
						if(true){
							// We are within range
							cb(result);
						}else{
							// We are not within range
							cb({"ERROR":"Licence Expired","ERROR_CODE":1003});
						}
					}else{
						// Invalid email tried to register, audit here
						cb({"ERROR":"Invalid credentials","ERROR_CODE":1002});
					}
				}else{
					// Respond with license key is not registered, please register at different API endpoint
					cb({"ERROR":"License Key is not registerd.","ERROR_CODE":1001});
				}
			}
		});
		
	},
};
