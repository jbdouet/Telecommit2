$("document").ready(function(){
 $.ajax({
        method: "POST",
            //dataType: "json", //type of data
            crossDomain: true,
            url: "server.php", //Relative or absolute path to file.php file
            
            success: function(response) {
                $(".content").html(response);
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
    
    
    $(".ask").on("click",function(){
        var value=$(".number").val();
        $.ajax({
            method: "POST",
            //dataType: "json", //type of data
            crossDomain: true,
            url: "server.php", //Relative or absolute path to file.php file
            data: {number:value},
            success: function(response) {
                $(".content").html(response);
            },
            error: function(request,error) 
            {
                console.log(request+":"+error);
            }
        });
        return false;
    });
});