<?php

include("db_connection.php");




$comment = $_POST["comment"];
$item_id = $_POST["item_id"];
$email = $_POST["email"];

$sql = "SELECT u.id FROM user u WHERE email = '" . $email . "'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);
$userId = $user["id"];

$sql = "INSERT INTO comment (`name`, `item_id`, `user_id`)
        VALUES ('{$comment}', $item_id, $userId)";

mysqli_query($conn, $sql);