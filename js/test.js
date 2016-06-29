
$(document).ready(ready);

function showProduct(str) {
    var cat = location.search.split('category=')[1];

    brands = document.getElementsByName('brand');
    bf='';
    for (i = 0; i < brands.length; i++) {
        if (brands[i].checked) {
            bf = bf + ",'" + brands[i].value + "'";
        }
    }
    bf = bf.slice(1);

    categories = document.getElementsByName('category');
    cf='';
    for (i = 0; i < categories.length; i++) {
        if (categories[i].checked) {
            cf = cf + ",'" + categories[i].value + "'";
        }
    }
    cf = cf.slice(1);

    price = document.getElementsByName('price');
    pf='';
    for (i = 0; i < price.length; i++) {
        if (price[i].checked) {
            pf = price[i].value ;
            break;
        }
    }


    if (str == "") {
        document.getElementById("display_info").innerHTML = "";
        return;
    } else {
        
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("display_info").innerHTML = xmlhttp.responseText;
            }
        };

        xmlhttp.open("POST","ProductsLayer.php",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("root_Category="+cat+" & category="+cf+" & brands="+bf+" & price="+pf);
    }
}