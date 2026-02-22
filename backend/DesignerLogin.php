<?php
include 'password.php';
include 'DbConnect.php';
include 'fetchingData.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        $email = $data->email;
        $password = $data->password;

        $designerData = getDesignerDataByEmail($conn, $email);
        if($designerData['status'] === 1){
            $designer = $designerData['data'];
            if($designer['AccountStatus']=== '0'){
                $response = [
                    'status' => 0,
                    'message' => 'This account has not been verified. Wait until you receive an email',
                ];
                echo json_encode($response);
                exit();
            }
            if(verifyPassword($password, $designer['Password'])){
                $response = [
                    'status' => 1,
                    'message' => 'Authentication successful',
                    'data' => $designer
                ];
            } else {
                $response = [
                    'status' => 0,
                    'message' => 'Incorrect password or email'
                ];
            }
        } else {
            $response = [
                'status' => 0,
                'message' => 'Incorrect email or password'
            ];
        }
        echo json_encode($response);
}
