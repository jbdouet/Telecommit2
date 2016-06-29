<?php

$password= "";
$username= "root";
$dbname= "telecom";
$server= "localhost";
    
$mysqli = new mysqli($server, $username, $password, $dbname);

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
	
    
$query="SELECT A_SERVICE.NAME, A_SERVICE.CATEGORY, A_SERVICE.DESCRIPTION ,A_SERVICE.ID, HAS_A.DEVICE_ID FROM A_SERVICE,HAS_A WHERE A_SERVICE.ID=HAS_A.A_ID";
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