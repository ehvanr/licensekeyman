var clientLogic = require('./clientLogic.js');

module.exports = function(router){
	
	router.get('/', function(req, res) {
		clientLogic.executeTestQuery(function(data){
			res.json(data);	
		});
	})
	
	// Must use x-www-form-urlencoded
	.post('/checklicense', function(req, res) {
		// ApplicationID
		res.json(req.body)
	})
	
	// Must use x-www-form-urlencoded
	.post('/register', function(req, res) {
		res.json(req.body.test)
	});	
}