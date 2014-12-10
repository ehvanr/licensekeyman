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
	
    /**
     * [removeApplication] application/remove
     *      appID
     * [renameApplication] application/rename
     *      appID, newName
     * [addApplication] application/add
     *      appName
     * 
     * [deleteUser] user/delete
     *      userID
     * [changeUserName] user/change_name
     *      userID, newName
     * [changeUserEmail] user/change_email
     *      userID, newEmail
     * 
     * [deleteKey] key/delete
     *      key, appID
     * [addKeys] key/add_amount
     *      keyAmount
     * [disassociateUser] key/disassociate_user
     *      userID, appID, key
     **/
	
    .post('/application/remove', function(req, res) {
		if(req.body.appID){
			managementLogic.removeApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/application/rename', function(req, res) {
		if(req.body.appID && req.body.newName){
			managementLogic.renameApplication(req.body.appID, req.body.newName, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/application/add', function(req, res) {
		if(req.body.appName){
			managementLogic.addApplication(req.body.appName, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/delete', function(req, res) {
		if(req.body.userID){
			managementLogic.deleteUser(req.body.userID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/change_name', function(req, res) {
		if(req.body.userID && req.body.newName){
			managementLogic.changeUserName(req.body.appID, req.body.newName, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/user/change_email', function(req, res) {
		if(req.body.userID && req.body.newEmail){
			managementLogic.changeUserEmail(req.body.appID, req.body.newEmail, function(data){
				res.json(data);	
			});
		}
	})

    // NOT DONE and NOT ADDED TO LOGIC
	.post('/user/add', function(req, res) {
		if(req.body.userID && req.body.newEmail){
			managementLogic.changeUserEmail(req.body.appID, req.body.newEmail, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/key/delete', function(req, res) {
		if(req.body.key && req.body.appID){
			managementLogic.deleteKey(req.body.key, req.body.appID, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/key/add_amount', function(req, res) {
		if(req.body.appID && req.body.keyAmount){
			managementLogic.addKeys(req.body.appID, req.body.keyAmount, function(data){
				res.json(data);	
			});
		}
	})
	
	.post('/key/disassociate_user', function(req, res) {
		if(req.body.userID && req.body.appID && req.body.key){
			managementLogic.disassociateUser(req.body.userID, req.body.appID, req.body.key, function(data){
				res.json(data);	
			});
		}
	});
}
