$(document).ready(ready);

function getParameter(param) {
    var url = window.location.href; //ottieni l'URL completo della pagina attuale (che ha quindi i parametri)
    var urlparts = url.split("?");
    //if -> non ci sono parametri passati
    if (urlparts.length == 1){
        return "";
    }
    var parameters = urlparts[1].split("&"); //buttiamo via la prima parte dell'URL (urlparts[1]) e teniamo tutte le coppie parametro-valore
    var requestedParam = "";
    //Cerca tra i vari parametri quello indicato nell'argomento della funzione
    for (i=0; i<parameters.length; i++) {
        var parts = parameters[i].split("=");
        if (parts[0] == param){
            requestedParam = parts[1];
            break;
        }
    }

    return requestedParam;
}

function addToRow(devices, index) {
    var row="<div class='col-md-3 portfolio-item'>";
    row+="<table align='center' style='table-layout:fixed; width:240px'>";
    row+="<tr><td align='center'><img class='img-responsive' src='" +devices[index].PreviewImg+ "' style='height: 250px'></td></tr>";
    row+="<tr><td style='overflow:hidden' align='center'><h3>" +devices[index].Name+ "</h3></td></tr>";
    row+="<tr>";
    //"1" sta per "true"
    if (devices[index].IsDiscounted == 1) {
        row+="<table align='center' style='table-layout:fixed; width:240px'>";
        row+="<tr>";
        row+="<td style='overflow:hidden' align='center'><h3><del><font color='orange'>" +parseFloat(devices[index].OldPrice).toFixed(2)+ "€</font></del></h3></td>";
        row+="<td style='overflow:hidden' align='center'><h3><font color='green'>" +parseFloat(devices[index].Price).toFixed(2)+ "€</font></h3></td>";      
        row+="</tr>";
        row+="</table>";                       
    } else {
        row+="<td style='overflow:hidden' align='center'><h3><font color='orange'>" +parseFloat(devices[index].Price).toFixed(2)+ "€</font></h3></td>";
    }
    row+="</tr>";
    row+="<tr><td align='center'><a href='#' class='scopri' role='button'>SCOPRI</a></td></tr>";
    row+="</table></div>";

    return row;
}

function extractLowPrice(price) {
    if (price == "Tutti") {
        return -1;
    } else if (price.indexOf('>') > -1){
        //se c'è un ">" vuol dire che siamo nel caso in cui vogliamo prezzi a partire da una cifra in poi
        var low_price = price.split(" ");
        return parseInt(low_price[1]);
    }else {
        var interval_split = price.split(" ");
        var interval = interval_split[0];
        var low_price = interval.split("-");
        return parseInt(low_price[0]);
    }
}

function extractHighPrice(price) {
    if (price == "Tutti" || price.indexOf('>') > -1) {
        return -1;
    } else {
        var interval_split = price.split(" ");
        var interval = interval_split[0];
        var high_price = interval.split("-");
        return parseInt(high_price[1]);
    }
}

function displayDevices(response) {
    var devices=JSON.parse(JSON.stringify(response));
    var category = getParameter("category");
    var pageParam = getParameter("p");
    var page;
    if (pageParam == ""){
        page = 1;
    } else {
        page = parseInt(pageParam);
    }

    var prevPage = 0;
    if (page > 1) {
        prevPage = page-1;
    } else {
        prevPage = 1;
    }
    el = "<li><a href='http://timweb.altervista.org/devices.html?category=" +category+ "&p=" +prevPage+ "'>&laquo;</a></li>";

    //8 e' il numero di device che vogliamo per ogni pagina
    for (var i=1; i<=((devices.length-1)/8) + 1; i++) {
        if(i == page) {
            el+="<li class='active'><a href='http://timweb.altervista.org/devices.html?category=" +category+ "&p=" +i+ "'>" +i+ "</a></li>";
        } else {
            el+="<li><a href='http://timweb.altervista.org/devices.html?category=" +category+ "&p=" +i+ "'>" +i+ "</a></li>";
        }
    }

    var nextPage = 0;
    if (page < Math.floor((devices.length-1)/8)+1) {
        nextPage = page+1;
    } else {
        nextPage = page;
    }

    el+="<li><a href='http://timweb.altervista.org/devices.html?category=" +category+ "&p=" +nextPage+ "'>&raquo;</a></li>";
    $(".pagination").html(el);

    //Genero le due righe da visualizzare nella pagina, a seconda del "numero" di pagina selezionata
    var row1 = "";
    var row2 = "";
    for (var i=8*(page - 1); i<=(8*page - 1) && i < devices.length; i++) {
        //controllo se il device deve far parte della prima o della seconda riga
        if (i < 8*(page-1) + 3) {
            row1+= addToRow(devices, i);
        } else {
            row2+= addToRow(devices, i);
        }
    }

    $("#row1").html(row1);
    $("#row2").html(row2);
}

function ready(){
    console.log("I'm ready!");
    
    //Visualizza tutti i device della categoria selezionata nel parametro
    $.ajax({
        method: "POST",
        dataType: "json",
        crossDomain: true,
        url:"../php/getDevices.php",
        //Value "-1" stands for "ANY VALUE" in SQL query
        data:{category: getParameter("category"), brand:-1, os:-1, low_price:-1, high_price:-1},
        success: function(response) {
            displayDevices(response);
        },
        error: function(request,error) {
            console.log("Error: req: " + request + " Err: " + error);
        }
    });

    //Definisce il titolo della sezione
    $.ajax({
        method: "POST",
        dataType: "json",
        crossDomain: true,
        url:"../php/getDeviceCategoryTitle.php",
        data:{category: getParameter("category")},
        success: function(response) {
            var title=JSON.parse(JSON.stringify(response));
            var el = "<font color='cornflowerblue'>" +title[0].Name+"</font>";
            $("#deviceTitle").html(el);
        },
        error: function(request,error) {
            console.log("Error: req: " + request + " Err: " + error);
        }
    });

    //Ritorna i device filtrati
    $("#filter_btn").on("click",function(){
        var brand_el = document.getElementById("marca");
        var brand = brand_el.options[brand_el.selectedIndex].text;
        if (brand == "Tutti") {
            brand = -1;
        }
        var os_el = document.getElementById("sistemaOperativo");
        var os = os_el.options[os_el.selectedIndex].text;
        if (os == "Tutti") {
            os = -1;
        }
        var price_el = document.getElementById("prezzo");
        var price = price_el.options[price_el.selectedIndex].text;
        $.ajax({
            method: "POST",
            dataType: "json",
            crossDomain: true,
            url: "../php/getDevices.php",
            data: {category: getParameter("category"), brand:brand, os:os, low_price:extractLowPrice(price), high_price:extractHighPrice(price)},
            success: function(response) {
                displayDevices(response);
            },
            error: function(request,error) {
                console.log(request+":"+error);
            }
        });
        return false;
    });
    
}