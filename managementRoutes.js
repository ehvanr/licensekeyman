var managementLogic = require('./managementLogic.js');

module.exports = function(router){
	
	router.get('/applications', function(req, res) {
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


    // Keys
	.get('/keys', function(req, res) {
        managementLogic.getKeys(function(data){
            res.json(data);	
        });
	})

    // Active Keys
	.post('/active_keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
    
    // Inactive Keys
	.post('/inactive_keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getInActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
    
    // Users
	.get('/users', function(req, res) {
        managementLogic.getUsers(function(data){
            res.json(data);	
        });
	})


    // Active Users
	.get('/active_users', function(req, res) {
        managementLogic.getActiveUsers(function(data){
            res.json(data);	
        });
	})
    
    // Inactive Users
	.get('/inactive_users', function(req, res) {
        managementLogic.getInActiveUsers(function(data){
            res.json(data);	
        });
	})
    
    // Users by Application
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
