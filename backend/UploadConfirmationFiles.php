<?php

include 'password.php';
include 'DbConnect.php';
include 'fetchingData.php';

$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));

        $designerId = $_POST['id'];
        $token = $_POST['token'];
        // Handle file uploads
        $design1 = isset($_FILES['design1']) ? file_get_contents($_FILES['design1']['tmp_name']) : null;
        $design2 = isset($_FILES['design2']) ? file_get_contents($_FILES['design2']['tmp_name']) : null;
        $design3 = isset($_FILES['design3']) ? file_get_contents($_FILES['design3']['tmp_name']) : null;
        $isUsed = 1;

        $artistData = getArtistDataByDesignerId($conn, $designerId);
        if($artistData['status'] === 0){
            $response = [
                'status' => 0,
                'message' => 'Faild To Upload The Data, Try again later'
            ];
            echo json_encode($response);
            exit();
        } else {
            $artist = $artistData['data'];
            //echo $artist['DesignerId'];
            if($token !== $artist['Token']){
                $response = [
                    'status' => 0,
                    'message' => 'Invalid Access Token, Try again later'
                ];
                echo json_encode($response);
                exit();
            } else {
                //echo $artist['IsUsed'];
                if($artist['IsUsed'] === '1'){
                    $response = [
                        'status' => 0,
                        'message' => 'You have already uploaded the files, wait for a response or contact support'
                    ];
                    echo json_encode($response);
                    exit();
                }
                $query = 'UPDATE artist SET Design1 = :design1, Design2 = :design2, Design3 = :design3, IsUsed = :isUsed Where DesignerId = :designerId AND Token = :token';
                $stmt = $conn->prepare($query);
                $stmt->bindParam(':design1', $design1);
                $stmt->bindParam(':design2', $design2);
                $stmt->bindParam(':design3', $design3);
                $stmt->bindParam(':isUsed', $isUsed);
                $stmt->bindParam(':designerId', $designerId);
                $stmt->bindParam(':token', $token);

                if($stmt->execute()){
                    $response = [
                        'status' => 1,
                        'message' => 'Files Uploaded Successfully, Stay Tuned For Our Response :)'
                    ];
                } else {
                    $response = [
                        'status' => 0,
                        'message' => 'Failed To Upload Your Designs, Try Again Later'
                    ];
                }
                echo json_encode($response);
                exit();
            }
        }
}

