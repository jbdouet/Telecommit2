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
	
    $tv = $_POST["mobile"];
$query="select * from sl_service,has_sl where sl_service.id=has_sl.sl_id and has_sl.device_id='".$tv."'";
//	$query = "SELECT * FROM device,has_sl where device.id=has_sl.device_id and has_sl.sl_id='"+$tv+"'";

	
//$query = "SELECT * FROM device WHERE id in (SELECT device_id from has_sl where sl_id='"+$tv+"')";


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