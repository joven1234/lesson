<?php

include("db_connection.php");




$email = $_POST["email"];
$password = $_POST["password"];


$sql = "SELECT * FROM user WHERE email = '" . $email . "'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 0){
    $sql = "INSERT INTO user (email, password)
            VALUES ('{$email}', '{$password}')";
    mysqli_query($conn, $sql);
    echo true;
}else{
    echo false;
}


?>