// GET REQUESTS
function getKeys(cb){
    var myURL = "http://localhost:8081/api/management/keys";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
   
    getReq(myURL, keyArray, cb);
}

function getApplications(cb){
    var myURL = "http://localhost:8081/api/management/applications";
    
    // ApplicationID, ApplicationName
    var keyArray = ["ApplicationID", "ApplicationName"];

    getReq(myURL, cb);
}

function getUsers(cb){
    var myURL = "http://localhost:8081/api/management/users";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb);
}

function getActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/active_users";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb);
}

function getInActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/inactive_users";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    getReq(myURL, keyArray, cb);
}

// POST REQUESTS
function getKeysByApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/keys_by_application";
    postReq(myURL, myData, cb);
    // Key, ApplicationID, UserID, InUse, Issued, Expires
}

function getActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/active_keys";
    postReq(myURL, myData, cb);
    // Key, ApplicationID, UserID, InUse, Issued, Expires
}

function getInActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/inactive_keys";
    postReq(myURL, myData, cb);
    // Key, ApplicationID, UserID, InUse, Issued, Expires
}

function getUsersOnApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/users_on_application";
    postReq(myURL, myData, cb);
    // Key, ApplicationID, UserID, UserName, UserEmail, Issued, Expires
}

// GENERIC POST & GET
function postReq(URL, jsonData, cb){
    $.ajax({
        type: "POST",
        contentType : 'application/json',
        dataType: 'json',
        data: jsonData,
        url: URL,
        success: function(response){
            cb(response);
        }        
    })
}

function getReq(URL, keyArray, cb){
    $.ajax({
        type: "GET",
        url: URL,
        success: function(response){
            cb(keyArray, response);
        }        
    })
}
