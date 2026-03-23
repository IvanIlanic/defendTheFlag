<?php
$dbFile = '/tmp/lab.db';
$sqlFile = __DIR__ . '/init.sql';

if (!file_exists($dbFile)) {
    $pdo = new PDO("sqlite:" . $dbFile);
    $sql = file_get_contents($sqlFile);
    $pdo->exec($sql);
}
?>