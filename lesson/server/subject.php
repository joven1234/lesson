<?php

include("db_connection.php");


$id = $_GET["id"];

$sql = "SELECT g.name AS grade_name, s.name AS subject_name, 
        c.name AS component_name FROM grade g " .
       "JOIN subject s ON g.id = s.grade_id " .
       "JOIN component c ON s.id = c.subject_id AND g.id = c.grade_id " .
       "WHERE g.id = " . $id;
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}







foreach($data as $key => $val){
    $newArr[$val["subject_name"]][] = $val["component_name"];
}

$d[$data[0]["grade_name"]] = $newArr;


echo json_encode($d);




?>