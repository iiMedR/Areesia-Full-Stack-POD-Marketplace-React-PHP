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

            $id= $data->id;
            $firstName= $data->firstName;
            $lastName= $data->lastName;
            $email= $data->email;
            $phoneNumber= $data->phoneNumber;
            $country= $data->country;
            $city= $data->city;
            $postalCode= $data->postalCode;
            $address= $data->address;


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


            $sql = "UPDATE designer SET FirstName=:firstName, LastName=:lastName, PhoneNumber=:phoneNumber, Country= :country, City= :city, PostalCode = :postalCode, Address= :address  WHERE Id=:id";
            $stmt = $cnx->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':firstName', $firstName);
            $stmt->bindParam(':lastName', $lastName);
            $stmt->bindParam(':phoneNumber', $phoneNumber);
            $stmt->bindParam(':country', $country);
            $stmt->bindParam(':city', $city);
            $stmt->bindParam(':postalCode', $postalCode);
            $stmt->bindParam(':address', $address);
            if ($stmt->execute()) {
                $desData = getDesignerDataById($cnx, $id);
                // Check if client data was successfully retrieved
                if ($desData['status'] == 1) {
                    $designer = $desData['data'];
                    $response = [
                        'status' => 1,
                        'message' => 'Your Information Has Been Successfully Updated',
                        'data' => $designer,
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