// ------------------------------------------------------------------------ //
// ----------------------- TABLE SELECTIONS ------------------------------- //
// ------------------------------------------------------------------------ //
function getKeys(cb){
    var myURL = "http://localhost:8081/api/management/key/list";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
   
    currentTableFunction = getKeys;
    currentAppID = null;
    getReq(myURL, keyArray, cb, keysSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addKeys(prompt(\'Application ID:\'), prompt(\'Number of Keys to add:\'));";>Add Keys</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getApplications(cb){
    var myURL = "http://localhost:8081/api/management/application/list";
    
    // ApplicationID, ApplicationName
    var keyArray = ["ApplicationID", "ApplicationName"];

    currentTableFunction = getApplications;
    currentAppID = null;
    getReq(myURL, keyArray, cb, applicationsSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addApplication(prompt(\'Name:\'));";>Add Application</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    currentTableFunction = getUsers;
    currentAppID = null;
    getReq(myURL, keyArray, cb, usersSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addUser(prompt(\'User Name:\'), prompt(\'User Email:\'));";>Add User</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/active";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    currentTableFunction = getActiveUsers;
    currentAppID = null;
    getReq(myURL, keyArray, cb, usersSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addUser("prompt(\'User Name:\'), prompt(\'User Email:\'));";>Add User</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getInActiveUsers(cb){
    var myURL = "http://localhost:8081/api/management/user/list/inactive";

    // UserID, UserName, UserEmail
    var keyArray = ["UserID", "UserName", "UserEmail"];

    currentTableFunction = getInActiveUsers;
    currentAppID = null;
    getReq(myURL, keyArray, cb, usersSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addUser("prompt(\'User Name:\'), prompt(\'User Email:\'));";>Add User</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

// POST REQUESTS
function getKeysByApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/keys";

    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];

    currentTableFunction = getKeysByApplication;
    currentAppID = appID;
    postReq(myURL, keyArray, myData, cb, keysSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addKeys(prompt(\'Application ID:\'), prompt(\'Number of Keys to add:\'));";>Add Keys</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/active";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    currentTableFunction = getActiveKeys;
    currentAppID = appID;
    postReq(myURL, keyArray, myData, cb, keysSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addKeys(prompt(\'Application ID:\'), prompt(\'Number of Keys to add:\'));";>Add Keys</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getInActiveKeys(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/key/list/inactive";
    
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "InUse", "Issued", "Expires"];
    
    currentTableFunction = getInActiveKeys;
    currentAppID = appID;
    postReq(myURL, keyArray, myData, cb, keysSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
    
    var subMenu = document.getElementById("submenu");

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="addKeys(prompt(\'Application ID:\'), prompt(\'Number of Keys to add:\'));";>Add Keys</li>';
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
}

function getUsersOnApplication(appID, cb){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/users";
    
    // Key, ApplicationID, UserID, UserName, UserEmail, Issued, Expires
    var keyArray = ["Key", "ApplicationID", "UserID", "UserName", "UserEmail", "Issued", "Expires"];
    
    currentTableFunction = getUsersOnApplication;
    currentAppID = appID;
    postReq(myURL, keyArray, myData, cb, usersOnApplicationSubMenu);
    
    // We clear out the submenu because we're loading a different table.
    document.getElementById("submenu").innerHTML = '';
}

// ------------------------------------------------------------------------ //
// ----------------------- SUBMENU SELECTIONS ----------------------------- //
// ------------------------------------------------------------------------ //

// ARE YOU SURE!?
function removeApplication(appID){
    var myData = '{"appID":' + appID + '}';
    var myURL = "http://localhost:8081/api/management/application/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function renameApplication(appID, newName){
    var myData = '{"appID":' + appID + ',"newName":"' + newName + '"}';
    var myURL = "http://localhost:8081/api/management/application/rename";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function addApplication(appName){
    var myData = '{"appName":"' + appName + '"}';
    var myURL = "http://localhost:8081/api/management/application/add";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

// ARE YOU SURE!?
function removeUser(userID){
    var myData = '{"userID":"' + userID + '"}';
    var myURL = "http://localhost:8081/api/management/user/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function changeUserName(userID, newName){
    var myData = '{"userID":' + userID + ',"newName":"' + newName + '"}';
    var myURL = "http://localhost:8081/api/management/user/change_name";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function changeUserEmail(userID, newEmail){
    var myData = '{"userID":' + userID + ',"newEmail":"' + newEmail + '"}';
    var myURL = "http://localhost:8081/api/management/user/change_email";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function addUser(userName, userEmail){
    var myData = '{"userName":"' + userName + '","userEmail":"' + userEmail + '"}';
    var myURL = "http://localhost:8081/api/management/user/add";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

// ARE YOU SURE!?
function removeKey(appID, appKey){
    var myData = '{"appID":' + appID + ',"key":"' + appKey + '"}';
    var myURL = "http://localhost:8081/api/management/key/remove";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function addKeys(appID, keyAmount){
    var myData = '{"appID":"' + appID + '","keyAmount":"' + keyAmount + '"}';
    var myURL = "http://localhost:8081/api/management/key/add_amount";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function disassociateUser(appID, appKey){
    var myData = '{"appID":"' + appID + '","key":"' + appKey + '"}';
    var myURL = "http://localhost:8081/api/management/key/disassociate_user";

    postReq(myURL, null, myData, menuOptionResponse, null);
    executeRefresh();
}

function disassociateUserAndRemoveKey(appID, appKey){
    disassociateUser(appID, appKey);
    removeKey(appID, appKey);
}

// ------------------------------------------------------------------------ //
// ------------------------- REFFRESH FUNCTION ---------------------------- //
// ------------------------------------------------------------------------ //
function executeRefresh(){
    if(currentAppID === null){
        currentTableFunction(generateTable);
    }else{
        currentTableFunction(currentAppID, generateTable);
    } 
}

// ------------------------------------------------------------------------ //
// ---------------------- GENERIC API CALL METHODS ------------------------ //
// ------------------------------------------------------------------------ //
function postReq(URL, keyArray, jsonData, cb, subMenu){
    $.ajax({
        type: "POST",
        contentType : 'application/json',
        dataType: 'json',
        data: jsonData,
        url: URL,
        async: false,
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
