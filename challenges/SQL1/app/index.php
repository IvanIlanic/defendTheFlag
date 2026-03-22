<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Defend the Flag - SQL Injection Lab</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h1>Employee Login</h1>
        <p class="muted">This application starts intentionally vulnerable.</p>

        <form action="login.php" method="POST" autocomplete="off">
            <label for="profileID">Profile ID</label>
            <input type="text" name="profileID" id="profileID" placeholder="Enter profile ID" required>

            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter password" required>

            <button type="submit">Login</button>
        </form>

        <div class="links">
            <a href="checker.php">Open defense checker</a>
        </div>
    </div>
</body>
</html>