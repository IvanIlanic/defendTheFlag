<?php
$target = __DIR__ . '/login.php';

if (!file_exists($target)) {
    exit("login.php not found.");
}

$content = file_get_contents($target);

$checks = [
    "uses_prepare" =>
        strpos($content, 'prepare(') !== false,

    "uses_bound_placeholder_for_profileID" =>
        strpos($content, ':profileID') !== false || strpos($content, '?') !== false,

    "no_direct_sql_concat_for_profileID" =>
        strpos($content, "WHERE profileID='$profileID'") === false,

    "no_pdo_query_execution" =>
        strpos($content, '$pdo->query(') === false,

    "has_backend_validation" =>
        strpos($content, 'preg_match') !== false ||
        strpos($content, 'filter_var') !== false ||
        strpos($content, 'ctype_alnum') !== false,
];

$allPassed = !in_array(false, $checks, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Defense Checker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h1>Defense Checker</h1>
        <p class="muted">Secure <code>login.php</code> and return here.</p>

        <ul class="checklist">
            <?php foreach ($checks as $name => $passed): ?>
                <li><?php echo $passed ? '✅' : '❌'; ?> <?php echo htmlspecialchars($name); ?></li>
            <?php endforeach; ?>
        </ul>

        <?php if ($allPassed): ?>
            <div class="flag-box">
                <h2>Flag</h2>
                <p>FLAG{you_fixed_the_sql_injection}</p>
            </div>
        <?php else: ?>
            <p>Not secure yet.</p>
        <?php endif; ?>

        <div class="links">
            <a href="index.php">Back to login</a>
        </div>
    </div>
</body>
</html>