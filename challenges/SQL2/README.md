# SQl Inection part 2 - upadating db

This room will simulate the exploitaion of a web site where your job is
to find a way to update the table and fix it.

## Start 

```bash
docker compose up --build -d

/////sol/////

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

if (!preg_match('/^[a-zA-Z0-9._@\\-\\s]{1,60}$/', $nickName)) {
    exit("Invalid nickname");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit("Invalid email");
}

$stmt = $pdo->prepare("
    UPDATE usertable
    SET nickName = :nickName, email = :email
    WHERE uid = :uid
");
$stmt->execute([
    ':nickName' => $nickName,
    ':email' => $email,
    ':uid' => $uid
]);

header('Location: profile.php');
exit;