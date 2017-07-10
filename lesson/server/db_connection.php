<?php
//$conn = mysqli_connect("w0152880.kasserver.com","d026c63d","KZdfUK9aKoBbSm7D","d026c63d");
$conn = mysqli_connect("localhost","root","root","school_lesson");

// Check connection
if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>