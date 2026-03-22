<?php
require_once 'db.php';
$profileID = $_POST['profileID'];
$password = $_POST['password'];
$query = "SELECT * FROM usertable WHERE profileID='$profileID' AND password='$password'";
$result = $pdo->query($query);
$user = $result->fetch();
if($user){ echo "Logged in"; } else { echo "Fail"; }
?>