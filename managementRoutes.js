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
	.post('/keys_by_application', function(req, res) {
		if(req.body.appID){
			managementLogic.getKeysByApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	})

    // ---------------------------------------------
    // Active Keys
	.post('/active_keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	})
    
    // Inactive Keys
	.post('/inactive_keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getInActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	})

    // Active Users
	.get('/active_users', function(req, res) {
        managementLogic.getActiveUsers(function(data){
            res.json(data);	
        });
	})
    
    // Inactive Users
	.post('/inactive_users', function(req, res) {
		if(req.body.appID){
			managementLogic.getInActiveUsers(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	})
    
    // Users
	.post('/users_on_application', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
			res.json(req.body)
		}
	});
}
