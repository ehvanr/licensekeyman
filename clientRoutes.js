var clientLogic = require('./clientLogic.js');

module.exports = function(router){
	
	router.get('/', function(req, res) {
        res.json(req.body);
	})
	
	.post('/checklicense', function(req, res) {
		// ApplicationID
		//res.json(req.body.licensekey)
	
		if(req.body.licensekey && req.body.email){	
			clientLogic.checkLicense(req.body.licensekey, req.body.email, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body);
		}
	})
	
	.post('/register', function(req, res) {
		res.json(req.body.test)
	});	
}
