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
        $coverImage = isset($_FILES['coverImage']) ? file_get_contents($_FILES['coverImage']['tmp_name']) : null;
        $profileImage = isset($_FILES['profileImage']) ? file_get_contents($_FILES['profileImage']['tmp_name']) : null;

        $designerData = getDesignerDataById($conn, $designerId);

        if($designerData['status'] === 0){
            $response = [
                'status' => 0,
                'message' => 'Faild To Upload The Image, Try to logout then login again'
            ];
        } else {
            $query = 'UPDATE designer SET Profile = :profile, Cover = :cover WHERE Id = :id';
            $stmt = $conn->prepare($query);
            $stmt->bindParam(':profile', $profileImage);
            $stmt->bindParam(':cover', $coverImage);
            $stmt->bindParam(':id', $designerId);
            if($stmt->execute()){
                $designerData = getDesignerDataById($conn, $designerId);
                $designer = $designerData['data'];
                $response = [
                    'status' => 1,
                    'message' => 'Image Uploaded Successfully.',
                    'data' => $designer
                ];
            } else {
                $response = [
                    'status' => 0,
                    'message' => 'Faild To Upload The Image.'
                ];
            }
        }
        
        echo json_encode($response);
}

