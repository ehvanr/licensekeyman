var clientLogic = require('./clientLogic.js');

module.exports = function(router){
	
	router.get('/', function(req, res) {
		clientLogic.executeTestQuery(function(data){
			res.json(data);	
		});
	})
	
	.post('/checklicense', function(req, res) {
		// ApplicationID
		res.json(req.body)
		
		checkLicense.executeTestQuery(function(data){
			res.json(data);	
		});
	})
	
	.post('/register', function(req, res) {
		res.json(req.body.test)
	});	
}