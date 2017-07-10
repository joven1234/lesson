<?php
include("db_connection.php");

if(isset($_GET["item"])){
    $item = $_GET["item"];
    $id = $_GET["id"];

    $sql = "SELECT * FROM component c WHERE c.name = '" . $item . "'" . "AND c.grade_id = " . $id;


    $result = mysqli_query($conn, $sql);

    $result = mysqli_fetch_assoc($result);

    $sql = "SELECT d.name AS description, i.name AS item_name, i.id AS item_id FROM description d
      JOIN items i ON d.id = i.description_id WHERE i.component_id = " . $result["id"];

    $result = mysqli_query($conn, $sql);


    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }

}else if(isset($_GET["subject"])){
    $subject = $_GET["subject"];
    $id = $_GET["id"];
    $sql = "SELECT i.name AS item_name, i.id AS item_id FROM subject s JOIN component c ON s.id = c.subject_id 
            JOIN items i ON c.id = i.component_id WHERE s.grade_id = {$id} AND s.name = '" . $subject . "'";

    $result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }

}



echo json_encode($data);




?>