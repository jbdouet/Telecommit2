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


$tab = $_POST["tab"];
$mod = $_POST["mod"];
$mob = $_POST["mob"];


$mobile = " SELECT * FROM device WHERE device.promoted=0 and device.category='mobile'";
$tablet = " SELECT * FROM device WHERE device.promoted=0 and device.category='tablet'";
$modem = " SELECT * FROM device WHERE device.promoted=0 and device.category='modem'";
$all= " SELECT * FROM device WHERE device.promoted=0";


$mobile_tablet = " SELECT * FROM device WHERE device.promoted=0 and (device.category='mobile' or device.category='tablet')";
$mobile_modem = " SELECT * FROM device WHERE device.promoted=0 and (device.category='mobile' or device.category='modem')";

$tablet_modem = " SELECT * FROM device WHERE device.promoted=0 and (device.category='modem' or device.category='tablet')";

$query=$all;


if($tab==0 && $mod==0 && $mob==1)
	$query=$mobile;



if($tab==0 && $mod==1 && $mob==0)
	$query=$modem;


if($tab==0 && $mod==1 && $mob==1)
	$query=$mobile_modem;



if($tab==1 && $mod==0 && $mob==0)
	$query=$tablet;


if($tab==1 && $mod==0 && $mob==1)
	$query=$mobile_tablet;


if($tab==1 && $mod==1 && $mob==0)
	$query=$tablet_modem;

if($tab==1 && $mod==1 && $mob==1)
	$query=$all;


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