<?php

$password= "";
$username= "root";
$dbname= "testbase";
$server= "localhost";
    
$mysqli = new mysqli($server, $username, $password, $dbname);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
$query = " SELECT * FROM person ";
    //query execution
    $result = $mysqli->query($query);
    //Build Result String
    $display_string = "<table>";
    $display_string .= "<tr>";
    $display_string .= "<th>id</th>";
    $display_string .= "<th>name</th>";
    
    $display_string .= "</tr>";
    //if there are data available
    if($result->num_rows >0)
    {
    	
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $display_string .= "<tr>";
      		$display_string .= "<td>$row[id]</td>";
      		$display_string .= "<td>$row[name]</td>";
      		
      		$display_string .= "</tr>";
        }
        echo $display_string;
    } else {
        echo "Error";
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();

}
?>