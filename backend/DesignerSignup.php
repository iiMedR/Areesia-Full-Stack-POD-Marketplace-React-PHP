<?php

include 'password.php';
include 'DbConnect.php';
include 'fetchingData.php';
include './VerifyEmail/EmailSender.php';

$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));

        $type = $data->type; // had type anhtajo bach n3ref test li ansared f email confirmation
        $firstName = $data->firstName;
        $lastName = $data->lastName;
        $email = $data->email;
        $password = $data->password;
        $passwordHashed = hashPassword($password);

        $designerData = getDesignerDataByEmail($conn, $email);
        if($designerData['status'] === 1){//if designer email already exist
            $response = [
                'status' => 0,
                'message' => 'Email already exists',
                'email' => ''
            ];
            echo json_encode($response);
            exit();
        } else {
            $query = 'INSERT INTO designer(Id, FirstName, LastName, Email, Password) VALUES (null, :firstName, :lastName, :email, :password)';
            $stmt = $conn->prepare($query);
            $stmt->bindParam(':firstName', $firstName);
            $stmt->bindParam(':lastName', $lastName);
            $stmt->bindParam(':password', $passwordHashed);
            $stmt->bindParam(':email', $email);

            if($stmt->execute()){
                $emailResponse = sendEmailByDesignerEmail($conn, $email);
                if($emailResponse['status']){
                    $response = [
                        'status'=> 1,
                        'message' => 'The account created successfully',
                        'email' => $emailResponse['message']
                    ];
                } else {
                    $response = [
                        'status'=> 1,
                        'message' => 'The account created successfully',
                        'email' => 'Faild to send confirmation Email, Try again later or Contact Support.'
                    ];
                }


            } else {
                $response = [
                    'status'=> 0,
                    'message' => 'Failed To Create Account, Try Again Later',
                    'email' => ''
                ];
            }
        }
        echo json_encode($response);
}

