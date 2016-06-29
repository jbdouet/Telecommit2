$("document").ready(function(){
 $.ajax({
        method: "POST",
            //dataType: "json", //type of data
            crossDomain: true,
            url: "php/get_mobile_devices.php", //Relative or absolute path to file.php file
            
            success: function(response) {
                $(".content").html(response);
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
});