var activation;

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

function gen(activation) {
    return function(){
					$("#tv").html("");
					
						
											
						
					$("#tv").html(activation);
					
   
    }
  }



function view_format(tablet) {
    var row="<div class='col-md-3 portfolio-item'>";
    row+="<table align='center' style='table-layout:fixed; width:420px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"images/"+tablet.id+".jpg"+ "' style='height: 420px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet.name+ "</h3></td></tr>";
    row+="<tr>";
    
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tablet.description+ "</h3></td></tr>";
    row+="<tr><td align='center'><a href='get_tv_devices.html?tv=" +tablet.id+ "' class='animation animated-item-3' role='button'>COMPATIBLE DEVICES</a></td></tr>";
    row+="<tr><td align='center'><input type='submit' value='ACTIVATION' id='" +tablet.id+ "' class='scopri' role='button'></input></td></tr>";


	// row+="<tr><td align='center'><input type='submit' value='FAQ' id='" +tablet.id+ "' class='scopri' role='button'></input></td></tr>";

   
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_tv_faq.html?tv=" +tablet.id+ "' class='animation animated-item-3' role='button'>FAQ</a></td></tr>";
   
    row+="</tr>";
    
    row+="</table></div>";

    return row;
}









$("document").ready(function(){
 $.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "http://telecommit.altervista.org/php/get_tv_entertainment.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				var tablet=JSON.parse(JSON.stringify(response));
				var row = "";
				var tablet_id=get_url_param("tv");
				
				var right_tablet;
				
	
				for (var i=0; i<tablet.length; i++) {
					if(tablet[i].id==tablet_id)
					{				
						right_tablet=tablet[i];
						break;
					}
					
			}
			activation=right_tablet.activation;
			tab=right_tablet;
			
			var tablet_view=view_format(right_tablet);
			$("#tv").html(tablet_view);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        }).done(function(){
		
				var tmp="#"+tab.id;
					
				 $(tmp).on("click",gen(activation));
		
});
});






