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

	.post('/application/keys', function(req, res) {
		if(req.body.appID){
			managementLogic.getKeysByApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})

	.post('/application/users', function(req, res) {
		if(req.body.appID){
			managementLogic.getUsersBasedOnApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
    
    .post('/application/remove', function(req, res) {
		if(req.body.appID){
			managementLogic.removeApplication(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/application/rename', function(req, res) {
        console.log("why");
        if(req.body.appID && req.body.newName){
			managementLogic.renameApplication(req.body.appID, req.body.newName, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/application/add', function(req, res) {
		if(req.body.appName){
			managementLogic.addApplication(req.body.appName, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
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
    
	.post('/key/list/active', function(req, res) {
		if(req.body.appID){
			managementLogic.getActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
    
	.post('/key/list/inactive', function(req, res) {
		if(req.body.appID){
			managementLogic.getInActiveKeys(req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
    
	.post('/key/remove', function(req, res) {
		if(req.body.key && req.body.appID){
			managementLogic.removeKey(req.body.key, req.body.appID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/key/add_amount', function(req, res) {
		if(req.body.appID && req.body.keyAmount){
			managementLogic.addKeys(req.body.appID, req.body.keyAmount, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/key/disassociate_user', function(req, res) {
		if(req.body.appID && req.body.key){
            console.log(req.body.key);
            console.log(req.body.appID);
			managementLogic.disassociateUser(req.body.appID, req.body.key, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
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
    
	.get('/user/list/active', function(req, res) {
        managementLogic.getActiveUsers(function(data){
            res.json(data);	
        });
	})
    
	.get('/user/list/inactive', function(req, res) {
        managementLogic.getInActiveUsers(function(data){
            res.json(data);	
        });
	})
	
    .post('/user/remove', function(req, res) {
		if(req.body.userID){
			managementLogic.removeUser(req.body.userID, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/user/change_name', function(req, res) {
		if(req.body.userID && req.body.newName){
			managementLogic.changeUserName(req.body.userID, req.body.newName, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})
	
	.post('/user/change_email', function(req, res) {
		if(req.body.userID && req.body.newEmail){
			managementLogic.changeUserEmail(req.body.userID, req.body.newEmail, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	})

    // NOT DONE and NOT ADDED TO LOGIC
	.post('/user/add', function(req, res) {
		if(req.body.userID && req.body.newEmail){
			managementLogic.changeUserEmail(req.body.appID, req.body.newEmail, function(data){
				res.json(data);	
			});
		}else{
            res.json({"STATUS":"Invalid POST parameters.","CODE":3000});
        }
	});
	
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
	
}
