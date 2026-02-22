<?php
include 'DbConnect.php';
include 'phoneNumber.php';
include 'fetchingData.php';
$objDb = new DbConnect;
$cnx = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
        $data = json_decode( file_get_contents('php://input'));

            $id = $data->id;
            $firstName = $data->firstName;
            $lastName = $data->lastName;
            $email = $data->email;
            $phoneNumber = $data->phoneNumber;
            $birthday = $data->birthday;

            if($birthday === ''){
                $birthday = null;
            }

            if(isValidPhoneNumber($phoneNumber) === 0){
                $response = ['status' => 0, 'message' => 'Phone Number Is Not Valid'];
                echo json_encode($response);
                exit();
            }

            if($id === '' || $firstName === '' || $lastName === ''){
                $response = ['status' => 0, 'message' => 'Missing important information'];
                echo json_encode($response);
                exit();
            }


            $sql = "UPDATE clients SET FirstName=:firstName, LastName=:lastName, PhoneNumber=:phoneNumber, Birthday=:birthday  WHERE Id=:id";
            $stmt = $cnx->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':firstName', $firstName);
            $stmt->bindParam(':lastName', $lastName);
            $stmt->bindParam(':phoneNumber', $phoneNumber);
            $stmt->bindParam(':birthday', $birthday);
            if ($stmt->execute()) {
                $cltData = getClientDataById($cnx, $id);
            
                // Check if client data was successfully retrieved
                if ($cltData['status'] == 1) {
                    $client = $cltData['data'];
                    $response = [
                        'status' => 1,
                        'message' => 'Your Information Has Been Successfully Updated',
                        'id' => $client['Id'],
                        'firstName' => $client['FirstName'],
                        'lastName' => $client['LastName'],
                        'phoneNumber' => $client['PhoneNumber'],
                        'email' => $client['Email'],
                        'birthday' => $client['Birthday'],
                        'defaultPassword' => $client['DefaultAddressId'],
                        'emailConfirmation' => $client['EmailConfirmation'],
                    ];
                } else {
                    // Handle the case where client data could not be retrieved
                    $response = [
                        'status' => 0,
                        'message' => 'Updated, but failed to retrieve updated data'
                    ];
                }
            } else {
                $response = [
                    'status' => 0,
                    'message' => 'An Error Occurred, Try Again Later'
                ];
            }
            
            echo json_encode($response);


        }
?>