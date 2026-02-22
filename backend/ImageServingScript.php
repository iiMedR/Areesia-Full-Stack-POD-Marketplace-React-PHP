<?php

include 'password.php';
include 'DbConnect.php';
include 'fetchingData.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$designerId = $_GET['id'] ?? null;
$type = $_GET['type'] ?? ''; // 'profile' or 'cover'

if ($designerId && ($type === 'profile' || $type === 'cover')) {
    $columnName = $type === 'profile' ? 'Profile' : 'Cover';
    $sql = "SELECT $columnName FROM designer WHERE Id = :id";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $designerId, PDO::PARAM_INT);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row && $row[$columnName]) {
        header('Content-Type: image/jpeg'); // Adjust the content type if needed
        echo $row[$columnName];
        exit;
    }
}

http_response_code(404);
echo "Image not found";
exit;

