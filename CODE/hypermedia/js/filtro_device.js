$(document).ready(ready);

function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

//Prende da DB tutti i valori esistenti di "Marca" e "SistemaOperativo"
function ready(){
    console.log("I'm ready!");
    
    $.ajax({
        method: "POST",
        dataType: "json",
        crossDomain: true,
        url:"../php/getDeviceFilters.php",
        success: function(response) {
        	var filters=JSON.parse(JSON.stringify(response));
        	
        	var brands = [];
        	var oss = [];
        	for (var i=0; i<filters.length; i++) {
        		brands.push(filters[i].Brand);
        		oss.push(filters[i].OperatingSystem);
        	}

        	brands = uniq_fast(brands);
        	oss = uniq_fast(oss);

        	var el = "";
        	el+="<option>Tutti</option>";
        	for (var i=0; i<brands.length; i++) {
        		el+="<option>" +brands[i]+ "</option>";
        	}
        	$("#marca").html(el);

        	el = "<option>Tutti</option>";
        	for (var i=0; i<oss.length; i++) {
        		el+="<option>" +oss[i]+ "</option>";
        	}
        	$("#sistemaOperativo").html(el);
            
        },
        error: function(request,error) 
        {
            console.log("Error: req: " + request + " Err: " + error);
        }
    });

}