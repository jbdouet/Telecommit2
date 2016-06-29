$("document").ready(function(){
//$('#Load').load("http://telecommit.altervista.org/Telecommit/php/get_smartphone_phone.php");	
 $.ajax({
	
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "http://telecommit.altervista.org/php/get_smartphone_phone.php",
			//Relative or absolute path to file.php file
           // url: "http://telecommit.altervista.org/Telecommit/php/get_smartphone_phone.php",
            success: function(response) {
				
				var phone=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<phone.length; i++) {
				row+= insert_into_row(phone, i);
        
			}

			$("#phone").html(row);
                
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

function insert_into_row(phone, index) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+phone[index].id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +phone[index].name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +phone[index].description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='phone_device.html?mobile=" +phone[index].id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}











