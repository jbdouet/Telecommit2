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
$query="SELECT * FROM SL_SERVICE,HAS_SL WHERE SL_SERVICE.ID=HAS_SL.SL_ID AND HAS_SL.DEVICE_ID='".$tv."'";
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