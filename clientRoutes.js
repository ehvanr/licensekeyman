var clientLogic = require('./clientLogic.js');

module.exports = function(router){
	
	router.post('/check_license', function(req, res) {
		// ApplicationID
		//res.json(req.body.licensekey)
	
		if(req.body.licensekey && req.body.email && req.body.appID){	
			clientLogic.checkLicense(req.body.licensekey, req.body.email, req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body);
		}
	})
	
	.post('/register_application', function(req, res) {
		
        if(req.body.licensekey && req.body.email && req.body.appID){	
			clientLogic.checkLicense(req.body.licensekey, req.body.email, req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body);
		}
	})

    .post('/register_user', function(req, res) {
		
        if(req.body.username && req.body.email){	
			clientLogic.registerUser(req.body.username, req.body.email, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body);
		}
	});
}
