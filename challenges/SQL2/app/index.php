<?php require_once 'init.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SQL Injection Part 2 - UPDATE Lab</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h1>Employee Login</h1>
        <p class="muted">This room starts intentionally vulnerable.</p>

        <form action="login.php" method="POST">
            <label for="profileID">Profile ID</label>
            <input type="text" name="profileID" id="profileID" required>

            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>

            <button type="submit">Login</button>
        </form>

        <div class="hint">
            <strong>Training credentials:</strong><br>
            profileID: 10<br>
            password: toor
        </div>
    </div>
</body>
</html>
