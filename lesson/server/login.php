<?php

include("db_connection.php");




$email = $_POST["email"];
$password = $_POST["password"];


$sql = "SELECT * FROM user WHERE email = '" . $email . "'" . " AND password = '" . $password . "'";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 1){
    $result = mysqli_fetch_assoc($result);
    $user["username"] = $result["username"];
    $user["email"] = $result["email"];
    echo json_encode($user);
}else{
    echo false;
}