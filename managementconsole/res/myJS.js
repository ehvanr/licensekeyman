function onLoad(){
    getApplications(generateTable);
}

function generateTable(keyArray, data, subMenu){
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
        trBodyElement.onclick = function(){subMenuOptions(this, subMenu)};

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

function subMenuOptions(clickedElement, subMenu){
    console.log(clickedElement.innerHTML + ": " + subMenu); 
}
