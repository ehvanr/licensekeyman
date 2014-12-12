function onLoad(){
    getApplications(generateTable);
}

function generateTable(keyArray, data, subMenuCB){
    // Delete the table here when we generate another one.
    if(document.getElementById("myData_wrapper") != null){
        document.getElementById("myData_wrapper").remove();
    }

    var myContent = document.getElementById("content");

    var myTable = document.createElement('table');
    myTable.id = "myData";
    myTable.style.borderCollapse = "collapse";
    myTable.setAttribute('border','1');
                                    
    // Creates the tbody and tr element of the table
    var theadElement = document.createElement('thead');
    var trHeadElement = document.createElement('tr');
                                                                    
    // Set the headers
    for(var j = 0; j < keyArray.length; j++){
        var thElement = document.createElement('th');
        thElement.appendChild(document.createTextNode(keyArray[j]))
        trHeadElement.appendChild(thElement)
    }

    theadElement.appendChild(trHeadElement);
                                                                                    
    var tbdyElement = document.createElement('tbody');
    
    // Set the content from the request
    for(var i = 0; i < data.length; i++){
        var trBodyElement = document.createElement('tr');
        trBodyElement.onclick = function(){subMenuCB(this)};
        trBodyElement.value = data[i];
        
        for(var j = 0; j < keyArray.length; j++){                 
            var tdElement = document.createElement('td');
            var tempValue = data[i][keyArray[j]];
           
            // Make more user friendly.  Display "N/A" instead of "null" 
            if(tempValue === null){
                tempValue = "N/A";
            }

            tdElement.appendChild(document.createTextNode(tempValue))
            trBodyElement.appendChild(tdElement)
        }
        tbdyElement.appendChild(trBodyElement);
    }

    // Append ALL THE THINGS
    myTable.appendChild(theadElement);
    myTable.appendChild(tbdyElement);
    myContent.innerHTML = '';
    myContent.appendChild(myTable)
    
    $(document).ready(function(){
        var myDT = $('#myData').DataTable();

        $('#myData tbody').on('click', 'tr', function(){
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }else{
                myDT.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
    });
}

function applicationsSubMenu(sourceRow){
    // ApplicationID, ApplicationName
    var ApplicationID = sourceRow.value["ApplicationID"];
    var ApplicationName = sourceRow.value["ApplicationName"];

    // SUBMENU TABLE CREATION
    var subMenu = document.getElementById("submenu");
    subMenu.innerHTML = "";

    var tempTable = document.createElement("table");
    tempTable.id = "tempTable";
    tempTable.style.borderCollapse = "collapse";
    tempTable.setAttribute('border', '1');

    var theadElement= document.createElement("thead");
    theadElement.style.display = "none";

    var tbodyElement = document.createElement("tbody");

    theadElement.innerHTML = tbodyElement.innerHTML = sourceRow.innerHTML;
    tempTable.appendChild(theadElement);
    tempTable.appendChild(tbodyElement);
    subMenu.innerHTML = "<h5>Selected Row:</h5>";
    subMenu.appendChild(tempTable);
    $('#tempTable').DataTable({
        "sDom": "rt"        
    });

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += "<li>Remove Application</li>";
    optionsHTML += "<li>Rename Application</li>";
    optionsHTML += "<li>Add Application</li>";
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);
    
}

function usersSubMenu(sourceRow){
    // UserID, UserName, UserEmail
    var UserID = sourceRow.value["UserID"];
    var UserName = sourceRow.value["UserName"];
    var UserEmail = sourceRow.value["UserEmail"];

    // SUBMENU TABLE CREATION
    var subMenu = document.getElementById("submenu");
    subMenu.innerHTML = "";

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += '<li onclick="alert(' + UserID + ');";>Delete User</li>';
    optionsHTML += "<li>Change Users Name</li>";
    optionsHTML += "<li>Change Users Email</li>";
    optionsHTML += "<li>Add User</li>";
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);

    console.log(sourceRow.innerHTML + ": Users Submenu");
}

function keysSubMenu(sourceRow){
    // Key, ApplicationID, UserID, InUse, Issued, Expires
    var sourceKey = sourceRow.value["Key"];
    var ApplicationID = sourceRow.value["ApplicationID"];
    var UserID = sourceRow.value["UserID"];
    var InUse = sourceRow.value["InUse"];
    var Issued = sourceRow.value["Issued"];
    var Expires = sourceRow.value["Expires"];

    // SUBMENU TABLE CREATION
    var subMenu = document.getElementById("submenu");
    subMenu.innerHTML = "";

    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += "<li>Delete Key</li>";
    optionsHTML += "<li>Add Keys</li>";
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);

    console.log(sourceRow.innerHTML + ": Keys Submenu");
}

function usersOnApplicationSubMenu(sourceRow){
    // Key, ApplicationID, UserID, UserName, UserEmail, Issued, Expires
    var sourceKey = sourceRow.value["Key"];
    var ApplicationID = sourceRow.value["ApplicationID"];
    var UserID = sourceRow.value["UserID"];
    var UserName = sourceRow.value["UserName"];
    var UserEmail = sourceRow.value["UserEmail"];
    var Issued = sourceRow.value["Issued"];
    var Expires = sourceRow.value["Expires"];

    // SUBMENU TABLE CREATION
    var subMenu = document.getElementById("submenu");

    subMenu.innerHTML = "";
    // SUBMENU OPTIONS CREATION
    var optionsDiv = document.createElement("div");
    optionsDiv.id = "options";

    var optionsHTML = "<h5>Options:</h5>";
    optionsHTML += "<ul>";
    optionsHTML += "<li>Disassociate User</li>";
    optionsHTML += "<li>Disassociate User and Remove Key</li>";
    optionsHTML += "</ul>";

    optionsDiv.innerHTML = optionsHTML;
    subMenu.appendChild(optionsDiv);

    console.log(sourceRow.innerHTML + ": Users On Application Submenu");
}

function menuOptionResponse(ignore, response, ignore2){
    var responseCode = response.CODE;
    var responseMessage = response.STATUS;

    if(responseCode != 2000){
        console.log(response);
        alert(responseMessage);
    }else{
        console.log(response);
    }
}
