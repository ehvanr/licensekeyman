// GET REQUESTS
function getKeys(cb){
    var myURL = "http://localhost:8081/api/management/key/list";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
   
    getReq(myURL, keyArray, cb, keysSubMenu);
}

function getApplications(cb){
    var myURL = "http://localhost:8081/api/management/application/list";
    
    // ApplicationID, ApplicationName
    var keyArray = ["ApplicationID", "ApplicationName"];

    getReq(myURL, keyArray, cb, applicationsSubMenu);
}

function getUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, usersSubMenu);
}

function getActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/active";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, usersSubMenu);
}

function getInActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/inactive";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, usersSubMenu);
}

// POST REQUESTS
function getKeysByApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/keys";

    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];

    postReq(myURL, keyArray, myData, cb, keysSubMenu);
}

function getActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/active";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, keysSubMenu);
}

function getInActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/inactive";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, keysSubMenu);
}

function getUsersOnApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/users";
    
    // Key, ApplicationID, UserID, UserName, UserEmail, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "UserName", "UserEmail", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, usersOnApplicationSubMenu);
}

// ADDITIONAL SUBMENU OPTION POSTS 
function removeApplication(appID){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function renameApplication(appID, newName){
    var myData = '{"appID":' + appID + ',"newName":"' + newName + '"}';
    var myURL = "http://localhost:8081/api/management/application/rename";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function addApplication(appName){
    var myData = '{"appName":"' + appName + '"}';
    var myURL = "http://localhost:8081/api/management/application/add";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function removeUser(userID){
    var myData = '{"userID":"' + userID + '"}';
    var myURL = "http://localhost:8081/api/management/user/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function changeUserName(userID, newName){
    var myData = '{"userID":' + userID + ',"newName":"' + newName + '"}';
    var myURL = "http://localhost:8081/api/management/user/change_name";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function changeUserEmail(userID, newEmail){
    var myData = '{"userID":' + userID + ',"newEmail":"' + newEmail + '"}';
    var myURL = "http://localhost:8081/api/management/user/change_email";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function addUser(){
}

function removeKey(appID, appKey){
    var myData = '{"appID":' + appID + ',"key":"' + appKey + '"}';
    var myURL = "http://localhost:8081/api/management/key/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
}

function addKeys(appID, keyAmount){
}

function disassociateUser(userID, appID){
}

function disassociateUserAndRemoveKey(userID, appID, appKey){
}

// GENERIC POST & GET
function postReq(URL, keyArray, jsonData, cb, subMenu){
    $.ajax({
        type: "POST",
        contentType : 'application/json',
        dataType: 'json',
        data: jsonData,
        url: URL,
        success: function(response){
            cb(keyArray, response, subMenu);
        }        
    })
}

function getReq(URL, keyArray, cb, subMenu){
    $.ajax({
        type: "GET",
        url: URL,
        success: function(response){
            cb(keyArray, response, subMenu);
        }        
    })
}
