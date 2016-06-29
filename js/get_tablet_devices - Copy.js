var tab=[];



function view_format(tablet) {
    var row="<div class='col-md-3 portfolio-item'>";
    row+="<table align='center' style='table-layout:fixed; width:420px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"images/"+tablet.id+".jpg"+ "' style='height: 420px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet.name+ "</h3></td></tr>";
    row+="<tr>";
    
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet.description+ "</h3></td></tr>";
    row+="<td style='overflow:hidden' align='center'><h3><font color='orange'>" +tablet.price+ "</font></h3></td>";
    row+="</tr>";
    
    row+="</table></div>";

    return row;
}

function gen(x) {
    return function(){
					$("#tablets").html("");
					
						val=view_format(x);
						
											
						
							$("#tablets").html(val);
					
   
    }
  }



$("document").ready(function(){
	
 $.ajax({
	
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
			 url: "php/get_tablet_devices.php",
           // url: "http://telecommit.altervista.org/Telecommit/php/get_tablet_devices.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				
				var tablet=JSON.parse(JSON.stringify(response));
				var row = "";
				
				for (var i=0; i<tablet.length; i++) {
				row+= insert_into_row(tablet, i);
			
	
	
				
				
			}
			tablets=tablet;
			$("#tablets").html(row);
          

		  
		  
			tab=tablet;
		  
		  
		  
		  
			
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        }).done(function(){
			
				
				for (var i=0; i<tab.length; i++) {
				
				var tmp="#"+tab[i].id;
			
				 $(tmp).on("click",gen(tab[i]));
		
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





function insert_into_row(tablet, index) {
    var row="<div class='col-md-3 portfolio-item'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"images/"+tablet[index].id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet[index].name+ "</h3></td></tr>";
    row+="<tr>";
    
                     
    
        row+="<td style='overflow:hidden' align='center'><h3><font color='orange'>" +tablet[index].price+ "</font></h3></td>";
    row+="</tr>";
    //row+="<tr><td align='center'><a href='TabletsAndComputers.html?tablet=" +tablet[index].id+ "' class='scopri' role='button'>VIEW</a></td></tr>";
        row+="<tr><td align='center'><input type='submit' value='view' id='" +tablet[index].id+ "' class='scopri' role='button'></input></td></tr>";

	var tmp="#"+tablet[index].id;
	
	
	

	
	
	
	
	
	row+="</table></div>";

	
    return row;
}











