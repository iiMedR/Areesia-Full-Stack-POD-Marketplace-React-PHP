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
        
        $id= $data->id;
        $clientId= $data->clientId;
        $country= $data->country;
        $address= $data->address;
        $postalCode= $data->postalCode;
        $city= $data->city;
        $isDefault= $data->isDefault;
        $isUerAgreement= $data->isUerAgreement;



        $addressdata = getAddressDataById($conn, $id);
        $addressDetails = $addressdata['data'];
        //echo json_encode($addressDetails);
        if($addressdata['status'] === 1){
           $query = 'UPDATE addresses SET Country = :country, City = :city, PostalCode = :postalCode, Address = :address, Agreement = :agreement WHERE Id = :id AND ClientId = :clientId';
           $stmt = $conn->prepare($query);
           $stmt->bindParam(':country', $country);
           $stmt->bindParam(':city', $city);
           $stmt->bindParam(':postalCode', $postalCode);
           $stmt->bindParam(':address', $address);
           $stmt->bindParam(':agreement', $isUerAgreement);
           $stmt->bindParam(':id', $id);
           $stmt->bindParam(':clientId', $clientId);
           if($stmt->execute()){//wach 3ml update
                if($isDefault){//wach update jdid hwa default address
                    $query = 'UPDATE clients SET DefaultAddressId = :defaultAddress WHERE Id = :clientId';
                    $stmt = $conn->prepare($query);
                    $stmt->bindParam(':defaultAddress', $id);
                    $stmt->bindParam(':clientId', $clientId);
                    if($stmt->execute()){//wach 3ml update bla machakil as default
                        $response = [
                            'status' => 1,
                            'message' => 'Your Address Has Been Updated As The Default Address.',
                        ];
                        echo json_encode($response);
                        exit();
                    } else {//hna 3ml update f address walakin mardhach default
                        $response = [
                            'status' => 1,
                            'message' => 'Your Address Has Been Updated But Failed To Make It Default',
                        ];
                        echo json_encode($response);
                        exit();
                    }
                } else {//hna client aslan mabghach y3mlo default
                    $response = [
                        'status' => 1,
                        'message' => 'The Address Updated Successfully.',
                    ];
                    echo json_encode($response);
                    exit();
                }
           } else {//error
                $response = [
                        'status' => 0,
                        'message' => 'Failed To Update The Address, Try Again Later',
                ];
                echo json_encode($response);
                exit();
           }
        }

}
