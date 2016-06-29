
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



$("document").ready(function(){
	
 $.ajax({
	
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "php/get_home_devices.php", //Relative or absolute path to file.php file
           data:{homefamily: get_url_param("homefamily")},

            success: function(response) {
				
				var modem=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<modem.length; i++) {
				row+= insert_into_row(modem, i);
        
			}

			$("#homefamily").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});


function insert_into_row(modem, index) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+modem[index].id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +modem[index].name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +modem[index].description+ "</h5></td>";
    row+="</tr>";
	
	if(modem[index].category=="modem")
    row+="<tr><td align='center'><a href='modem_device.html?modem=" +modem[index].id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    if(modem[index].category=="tablet")
    row+="<tr><td align='center'><a href='tablet_device.html?tablet=" +modem[index].id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
 if(modem[index].category=="mobile")
    row+="<tr><td align='center'><a href='phone_device.html?mobile=" +modem[index].id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
	
	row+="</table></div>";

    return row;
}











