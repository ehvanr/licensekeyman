var managementLogic = require('./managementLogic.js');

module.exports = function(router){
	
	router.get('/', function(req, res) {
		managementLogic.executeTestQuery(function(data){
			res.json(data);	
		});
	})
	
	// Returns all applications
	.get('/applications', function(req, res) {
		managementLogic.getApplications(function(data){
			res.json(data);	
		});
	})

	// Return all keys for specific application
	.post('/keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	});
}