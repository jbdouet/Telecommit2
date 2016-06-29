function get_url_param(param) {
    var url = window.location.href; 
    var urlparts = url.split("?");
    
    if (urlparts.length == 1){
        return "";
    }
    var parameters = urlparts[1].split("&"); 
    var requestedParam = "";
    
    for (i=0; i<parameters.length; i++) {
        var parts = parameters[i].split("=");
        if (parts[0] == param){
            requestedParam = parts[1];
            break;
        }
    }

    return requestedParam;
} 





function insert_into_row(tablet, index) {
    var row="<div class='col-md-3 portfolio-item'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"images/"+tablet[index].id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet[index].name+ "</h3></td></tr>";
    row+="<tr>";
    
                     
    
        row+="<td style='overflow:hidden' align='center'><h3><font color='orange'>" +tablet[index].price+ "</font></h3></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='get_tablet.html?tablet=" +tablet[index].id+ "' class='scopri' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}




$("document").ready(function(){
 $.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "php/get_tablet_devices.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				var tablet=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<tablet.length; i++) {
				row+= insert_into_row(tablet, i);
        
			}

			$("#row1").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});






