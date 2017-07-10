<?php
include("db_connection.php");

$item_id = $_GET["item_id"];

$sql = "SELECT d.id AS description_id, i.id AS item_id, i.name AS item_name, d.name 
        AS description, i.image, s.url AS source_url FROM description d
        JOIN items i ON d.id = i.description_id LEFT JOIN source s ON s.id = i.source_id
        WHERE i.id = " . $item_id;

$result = mysqli_query($conn, $sql);

$item = mysqli_fetch_assoc($result);

$sql = "SELECT c.name, r.name AS reply, r.owner AS reply_owner, c.id, u.username 
        FROM items i JOIN comment c ON i.id = c.item_id 
        JOIN user u ON u.id = c.user_id LEFT JOIN reply r ON r.comment_id = c.id
        WHERE i.id = " . $item_id;
$result = mysqli_query($conn, $sql);


if(mysqli_num_rows($result) != 0){
    $i = 0;
    $comments[$i]["name"] = "";
    while($row = mysqli_fetch_assoc($result)){
        if(in_array($row["name"], array_column($comments, "name"))){
            foreach($comments as $x => $comment){
                if($comment["name"] == $row["name"]){
                    array_push($comments[$x]["reply"], array("name" => $row["reply"], "reply_owner" => $row["reply_owner"]));
                }
            }
        }else{
            $comments[$i] = $row;
            if($row["reply"] != null){
                $comments[$i]["reply"] = array();
                $comments[$i]["reply"][] = array("name" => $row["reply"], "reply_owner" => $row["reply_owner"]);
            }
        }
        $i++;
    }
}



$item["comments"] = isset($comments) ? $comments : null;



echo json_encode($item);

?>