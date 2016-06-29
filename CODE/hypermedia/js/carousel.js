$(document).ready(documentReady);
/*A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
*/

function documentReady(){
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getSLfromDB.php", //Relative or absolute path to file.php file
        
        //pt è nome del parametro, lo userò in getDescription
        //data: {table:id}, faccio una prova con solo SL, non passo parametri
        success: function(response) {
            $(".contents").html(" "+response);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}