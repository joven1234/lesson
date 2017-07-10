<?php

include("db_connection.php");




$comment_id = $_POST["comment_id"];
$reply = $_POST["reply"];
$owner = $_POST["owner"];

$sql = "INSERT INTO reply (`name`, `comment_id`, `owner`)
        VALUES ('{$reply}', $comment_id, '{$owner}')";

mysqli_query($conn, $sql);