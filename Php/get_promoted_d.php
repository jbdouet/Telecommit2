<?php

$password= "";
$username= "telecommit";
$dbname= "my_telecommit";
$server= "localhost";
    
$mysqli = new mysqli($server, $username, $password, $dbname);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
	
//Here is applied reverse logic to get more devices for testing filtering
$query = " SELECT * FROM device WHERE device.promoted=0";


    //query execution
    
    $result = $mysqli->query($query);
    $myArray = array();
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
   

    //free result
    $result->close();

    //close connection
    $mysqli->close();

}
?>