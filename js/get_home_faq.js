$("document").ready(function(){
	
 $.ajax({
	
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "php/get_home_faq.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				var param=get_url_param("homefamily");
				
				var tv=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<tv.length; i++) {
				
				if(tv[i].service_id==param)
				row+= insert_into_row(tv, i);
        
			}

			

			$("#homefamily").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});


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

function insert_into_row(tv, index) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tv[index].question+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +tv[index].answer+ "</h5></td>";
    row+="</tr>";
    row+="</table></div>";

    return row;
}











