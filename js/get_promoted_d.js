var mob=0;
var mod=0;
var tab=0;


function insert_mobile(phone) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+phone.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +phone.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +phone.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='phone_device.html?mobile=" +phone.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}

function insert_modem(phone) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+phone.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +phone.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +phone.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='modem_device.html?modem=" +phone.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}


function insert_tablet(phone) {
    var row="<div class='col-md-6'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +"Images/"+phone.id+".jpg"+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +phone.name+ "</h3></td></tr>";
    
    
    row+="<td style='overflow:hidden' align='center'><h5>" +phone.description+ "</h5></td>";
    row+="</tr>";
    row+="<tr><td align='center'><a href='tablet_device.html?tablet=" +phone.id+ "' class='animation animated-item-3' role='button'>VIEW</a></td></tr>";
    row+="</table></div>";

    return row;
}










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
            url: "php/get_promoted_d.php", //Relative or absolute path to file.php file

            success: function(response) {
				
				var promoted=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<promoted.length; i++) {
				
					if(promoted[i].category=="mobile")
				row+= insert_mobile(promoted[i]);
			
			
				if(promoted[i].category=="tablet")
				row+= insert_tablet(promoted[i]);
			
			
				if(promoted[i].category=="modem")
				row+= insert_modem(promoted[i]);
			
        
			}

			$("#promoteddevices").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
		
		
		$("#mob").click(function(){
			
		if(mob==0)
		mob=1; else
		{	
	if(mob==1)
		mob=0;
		}
		
		})
		
		$("#mod").click(function(){
		
		if(mod==0)
		mod=1; else
		{
		if(mod==1)
		mod=0;
		}
		
		})
		
		$("#tab").click(function(){
		
		if(tab==0)
		tab=1; else
	{	
	if(tab==1)
		tab=0;
	}	
	})
		
		
		
		
		
		
		
		$("#filtering").click(function(){
	
 $.ajax({
	
        method: "POST",
            dataType: "json", //type of data
            crossDomain: true,
            url: "php/filter.php", //Relative or absolute path to file.php file
			data: { mob : mob,mod:mod,tab:tab },
            success: function(response) {
				
				var promoted=JSON.parse(JSON.stringify(response));
				var row = "";
    
				for (var i=0; i<promoted.length; i++) {
				
					if(promoted[i].category=="mobile")
				row+= insert_mobile(promoted[i]);
			
			
				if(promoted[i].category=="tablet")
				row+= insert_tablet(promoted[i]);
			
			
				if(promoted[i].category=="modem")
				row+= insert_modem(promoted[i]);
			
        
			}

				$("#promoteddevices").html("");
			$("#promoteddevices").html(row);
                
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});
		
		
		
		
		
		
		
		
		
});

















