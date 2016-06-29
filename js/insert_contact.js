/*$("document").ready(function(){
				$.ajax({
						type: "POST",
						dataType: "json", //type of data
						crossDomain: true,
						url: "ContactUs.php",
						data: $(this).serialize(),
						success: function (data )
						{
							var usernameCount = data;
							$('#contact-form').find('.messages').html(usernameCount );
						},
				    });
				 return false; 
		
	
});*/
	
$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "php/insert_Contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                   /* var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;*/

                   /* var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';*/
                   
                        $('#contact-form').find('.messages').html('<h2 class="text-danger">Contact form successfully submitted. Thank you, I will get back to you soon!</h2>');
                        $('#contact-form')[0].reset();
                    
                }
            });
            return false;
        }
    })
});