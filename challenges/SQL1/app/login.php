<?php
require_once 'db.php';

$profileID = $_POST['profileID'] ?? '';
$password = $_POST['password'] ?? '';

// INTENTIONALLY VULNERABLE
// No backend validation
// Direct string concatenation
$query = "SELECT uid, name, profileID, role
          FROM usertable
          WHERE profileID='$profileID' AND password='$password'";

$stmt = $pdo->query($query);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Result</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <?php if ($user): ?>
            <h2>Welcome, <?php echo htmlspecialchars($user['name']); ?></h2>
            <p>You are logged in as <strong><?php echo htmlspecialchars($user['role']); ?></strong>.</p>

            <?php if ($user['role'] === 'admin'): ?>
                <?php require 'flag.php'; ?>
            <?php else: ?>
                <p>Only admin can view the flag.</p>
            <?php endif; ?>

        <?php else: ?>
            <h2>Invalid credentials</h2>
            <p>Try again.</p>
        <?php endif; ?>

        <div class="links">
            <a href="index.php">Back to login</a>
            <a href="checker.php">Run defense checker</a>
        </div>
    </div>
</body>
</html>