function onLoad(){
    getKeys(generateTable);
}

function generateTable(keyArray, data){
   
    var myContent = document.getElementById("content");
    console.log(myContent);
    var myTable = document.createElement('table');
    myTable.id = "myData";
    myTable.style.borderCollapse = "collapse";
    myTable.setAttribute('border','1');
                                    
    // Creates the tbody and tr element of the table
    var tbdyElement = document.createElement('tbody');
    var trHeadElement = document.createElement('tr');
                                                                    
    // Loop for values in json response (take values from first entry)
    for(var j = 0; j < keyArray.length; j++){
        var thElement = document.createElement('th');
        thElement.appendChild(document.createTextNode(keyArray[j]))
        trHeadElement.appendChild(thElement)
    }

    tbdyElement.appendChild(trHeadElement);
                                                                                    
    // Iterates and adds the elements to the appropriate column in the new row
    for(var i = 0; i < data.length; i++){
        var trBodyElement = document.createElement('tr');
        
        for(var j = 0; j < keyArray.length; j++){                 
            var tdElement = document.createElement('td');
            tdElement.appendChild(document.createTextNode(data[i][keyArray[j]]))
            trBodyElement.appendChild(tdElement)
        }
        tbdyElement.appendChild(trBodyElement);
    }
    
    // Append ALL THE THINGS
    myTable.appendChild(tbdyElement);
    myContent.appendChild(myTable)
}
