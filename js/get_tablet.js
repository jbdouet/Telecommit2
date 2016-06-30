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



function insert_mon(mon) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+mon.ID+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +mon.NAME+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +mon.DESCRIPTION+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_mon.html?monitor=" +mon.ID+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_line(line) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+line.ID+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +line.NAME+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +line.DESCRIPTION+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_line.html?line=" +line.ID+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}









function insert_tv(tv) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+tv.ID+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +tv.NAME+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +tv.DESCRIPTION+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_tv.html?tv=" +tv.ID+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_home(homefamily) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+homefamily.ID+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +homefamily.NAME+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +homefamily.DESCRIPTION+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_home.html?homefamily=" +homefamily.ID+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_health(health) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+health.ID+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +health.NAME+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +health.DESCRIPTION+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='http://telecommit.altervista.org/get_health.html?health=" +health.ID+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}




$("document").ready(function(){
 $.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "http://telecommit.altervista.org/php/get_tablet_devices.php", //Relative or absolute path to file.php file
            
            success: function(response) {
				var tablet=JSON.parse(JSON.stringify(response));
				var row = "";
				var tablet_id=get_url_param("tablet");
				
				var right_tablet;
				
	
				for (var i=0; i<tablet.length; i++) {
					if(tablet[i].id==tablet_id)
					{				
						right_tablet=tablet[i];
						break;
					}
        
			}
			var tablet_view=view_format(right_tablet);
			$("#tablets").html(tablet_view);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });

});	



$("document").ready(function(){	
		$.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "http://telecommit.altervista.org/php/get_phone_sl2.php", //Relative or absolute path to file.php file
            
            success: function(response) {
					
		
						var tablet_id=get_url_param("tablet");

				var sls=JSON.parse(JSON.stringify(response));
				var row = "";
		
				var right_tablet;
			
		
	
				for (var i=0; i<sls.length; i++) {
					
					if(sls[i].DEVICE_ID==tablet_id){
				
					if(sls[i].CATEGORY=="tv")
						row+=insert_tv(sls[i]);
					
					if(sls[i].CATEGORY=="homefamily")
						row+=insert_home(sls[i]);
					if(sls[i].CATEGORY=="health")						
						row+=insert_health(sls[i]);
					}
			}
			
	
			$("#sl_service").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});		





$("document").ready(function(){	
		$.ajax({
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "http://telecommit.altervista.org/php/get_phone_a.php", //Relative or absolute path to file.php file
            
            success: function(response) {
					
				
						var tablet_id=get_url_param("tablet");

				var sls=JSON.parse(JSON.stringify(response));
				var row = "";
		
				var right_tablet;
			
		
	
				for (var i=0; i<sls.length; i++) {
					
					if(sls[i].DEVICE_ID==tablet_id){
				
					if(sls[i].CATEGORY=="line")
						row+=insert_line(sls[i]);
					
					if(sls[i].CATEGORY=="monitoring")
						row+=insert_mon(sls[i]);
					
					}
			}
			
	
			$("#a_service").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});		

