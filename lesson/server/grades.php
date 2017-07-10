<?php

include("db_connection.php");

$sql = "SELECT g.name AS grade_name, s.name AS subject_name, g.id AS grade_id FROM grade g
        JOIN subject s ON g.id = s.grade_id";


$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result)){
    $data[$row["grade_name"]][] = $row["subject_name"];
}




echo json_encode($data);