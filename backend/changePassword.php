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

        $id = $data->id;
        $oldPassword = $data->oldPassword;
        $newPassword = $data->newPassword;
        $newPasswordHashed = hashPassword($data->newPassword);
        $confirmNewPassword = $data->confirmNewPassword;

        if ($id === '' || $oldPassword === '' || $newPassword === '' || $confirmNewPassword === '') {
            $response = ['status' => 0, 'message' => 'All fields are required'];
            echo json_encode($response);
            exit();
        }

        $cltData = getClientDataById($conn, $id);
        if($cltData['status'] === 1){
            //hadi jibt biha data d client o ana mhtajha bach n compariha m3a password li kteb clt
            $client = $cltData['data'];

            if (!verifyPassword($oldPassword, $client['Password'])) {
                $response = ['status' => 0, 'message' => 'The Current Password Is Incorrect'];
                echo json_encode($response);
                exit;
            }

            if ($newPassword !== $confirmNewPassword) {
                $response = ['status' => 0, 'message' => 'New Passwords Are Not The Same'];
                echo json_encode($response);
                exit;
            }

            
            $sql = "UPDATE clients SET Password = :password WHERE Id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':password', $newPasswordHashed);
            $stmt->bindParam(':id', $id);

            if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Your Password Has Been Updated Successfully'];
            echo json_encode($response);
            } else {
            $response = ['status' => 0, 'message' => 'Error in updating password, Try Again Later'];
            echo json_encode($response);
            }

        } elseif($cltData['status'] === 0){
            $response = ['status' => 0, 'message' => 'User not found'];
            echo json_encode($response);
            exit;
        }

}

