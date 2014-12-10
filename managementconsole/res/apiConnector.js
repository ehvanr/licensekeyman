// GET REQUESTS
function getKeys(cb){
    var myURL = "http://localhost:8081/api/management/key/list";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
   
    getReq(myURL, keyArray, cb, "keys");
}

function getApplications(cb){
    var myURL = "http://localhost:8081/api/management/application/list";
    
    // ApplicationID, ApplicationName
    var keyArray = ["ApplicationID", "ApplicationName"];

    getReq(myURL, keyArray, cb, "applications");
}

function getUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, "users");
}

function getActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/active";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, "activeusers");
}

function getInActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/inactive";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb, "inactiveusers");
}

// POST REQUESTS
function getKeysByApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/keys";

    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];

    postReq(myURL, keyArray, myData, cb, "keysbyapplication");
}

function getActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/active";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, "activekeys");
}

function getInActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/inactive";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, "inactivekeys");
}

function getUsersOnApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/users";
    
    // Key, ApplicationID, UserID, UserName, UserEmail, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "UserName", "UserEmail", "Issued", "Expires"];
    
    postReq(myURL, keyArray, myData, cb, "getusersonapplication");
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
            cb(keyArray, response);
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
