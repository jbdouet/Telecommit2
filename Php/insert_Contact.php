<?php

$password= "";
$username= "root";
$dbname= "telecom";
$server= "localhost";
    
	$mysqli = new mysqli($server, $username, $password, $dbname);

$Firstname = $_POST['name'];
$Lastname =$_POST['surname'];
$Email =$_POST['email'];
$Phone =$_POST['phone'];
$Message =$_POST['message'];
  
  
  if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
	
	// Insert sanitize string in record
	$query = "INSERT INTO contactus 
			      (Firstname,Lastname,Email,Phone,Message)
         	  VALUES
         	      ('$Firstname','$Lastname','$Email','$Phone','$Message')";
	
	 $result = $mysqli->query($query);
        // $retval=mysql_query($query,$conn);
          if ($result)
          { 
                echo 'It is working';
          }

   $mysqli->close();
}
?>
