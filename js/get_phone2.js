var phone_id;


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










function insert_tv(tv) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+tv.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tv.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +tv.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='get_tv.html?tv=" +tv.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_home(homefamily) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+homefamily.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +homefamily.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +homefamily.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='get_home.html?homefamily=" +homefamily.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_health(health) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+health.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +health.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +health.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='get_health.html?health=" +health.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}





$("document").ready(function(){

		
		$.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
			data:{mobile: get_url_param("mobile")},

            url: "php/get_phone_sl.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				var sls=JSON.parse(JSON.stringify(response));
				var row = "";
				
				var right_tablet;
				
	
				for (var i=0; i<sls.length; i++) {
					
					if(sls[i].category=="tv")
						row+=insert_tv(sls[i]);
					
					if(sls[i].category=="homefamily")
						row+=insert_home(sls[i]);
					if(sls[i].category=="health")						
						row+=insert_health(sls[i]);
			}
			
	
			$("#sl_services").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
		
		
});






