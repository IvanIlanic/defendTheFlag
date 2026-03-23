<?php
session_start();
require_once 'init.php';
require_once 'db.php';

if (!isset($_SESSION['uid'])) {
    header('Location: index.php');
    exit;
}

$uid = $_SESSION['uid'];
$nickName = $_POST['nickName'] ?? '';
$email = $_POST['email'] ?? '';

// INTENTIONALLY VULNERABLE
$query = "UPDATE usertable
          SET nickName='$nickName', email='$email'
          WHERE uid='$uid'";

try {
    $pdo->query($query);
} catch (PDOException $e) {
    die("SQL Error: " . $e->getMessage());
}

header('Location: profile.php');
exit;
