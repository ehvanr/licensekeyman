var managementLogic = require('./managementLogic.js');

module.exports = function(router){

    // --------------------------------------------------------------------- \\    
    // ---------------------------APPLICATION------------------------------- \\    
    // --------------------------------------------------------------------- \\    
	router.get('/application/list', function(req, res) {
		managementLogic.getApplications(function(data){
			res.json(data);	
		});
	})

	// Return all keys for specific application
	.post('/application/keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getKeysByApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})

    // Users by Application
	.post('/application/users', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})

    // --------------------------------------------------------------------- \\    
    // -------------------------------KEY----------------------------------- \\    
    // --------------------------------------------------------------------- \\    
	.get('/key/list', function(req, res) {
        managementLogic.getKeys(function(data){
            res.json(data);	
        });
	})
    
    // Active Keys
	.post('/key/list/active', function(req, res) {
		if(req.body.appID){
			managementLogic.getActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
    
    // Inactive Keys
	.post('/key/list/inactive', function(req, res) {
		if(req.body.appID){
			managementLogic.getInActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
    

    // --------------------------------------------------------------------- \\    
    // ------------------------------USER----------------------------------- \\    
    // --------------------------------------------------------------------- \\    
	.get('/user/list', function(req, res) {
        managementLogic.getUsers(function(data){
            res.json(data);	
        });
	})
    
    // Active Users
	.get('/user/list/active', function(req, res) {
        managementLogic.getActiveUsers(function(data){
            res.json(data);	
        });
	})
    
    // Inactive Users
	.get('/user/list/inactive', function(req, res) {
        managementLogic.getInActiveUsers(function(data){
            res.json(data);	
        });
	})

    // ------------------------------------------------------------------------- //
    // ------------------------------------------------------------------------- //
	
	.post('/application/remove', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/application/rename', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/application/add', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/delete', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/change_name', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/change_email', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
    // ADD USER (CLIENT)

	
	.post('/key/delete', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/key/add_amount', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/key/disassociate_user', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	});

    /**
     * application/remove
     * application/rename
     * application/add
     * 
     * user/delete
     * user/change_name
     * user/change_email
     * 
     * key/delete
     * key/add_amount
     * key/disassociate_user
     **/
}
