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
        
        $clientId = $data->id;
        $country = $data->Country;
        $address = $data->Address;
        $postalCode = $data->PostalCode;
        $city = $data->City;
        $isDefault = $data->IsDefault;
        $userAgreement = $data->UserAgreement;


        $addressesArray = getAddressesDataByClientId($conn, $clientId);
        if($addressesArray['status'] === 1){
            if(count($addressesArray['data']) >= 3){
                $response = [
                    'status' => 0,
                    'message' => 'You have reached the maximum number of addresses',
                ];
                echo json_encode($response);
                exit();
            }
        }

        $query = "INSERT INTO addresses(Id, ClientId, Country, City, PostalCode, Address, Agreement) VALUES(null, :clientId, :country, :city, :postalCode, :address, :agreement)";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':clientId', $clientId);
        $stmt->bindParam(':country', $country);
        $stmt->bindParam(':city', $city);
        $stmt->bindParam(':postalCode', $postalCode);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':agreement', $userAgreement);
        if ($stmt->execute()) {
            if($isDefault === true){
                $AddressId = $conn->lastInsertId();
                $query = 'UPDATE clients SET DefaultAddressId = :defaultAddress WHERE Id = :clientId';
                $stmt = $conn->prepare($query);
                $stmt->bindParam(':defaultAddress', $AddressId);
                $stmt->bindParam(':clientId', $clientId);
                if($stmt->execute()){
                    $response = [
                        'status' => 1,
                        'message' => 'Your Address Has Been Uploaded As The Default Address.',
                    ];
                    echo json_encode($response);
                    exit();
                }
            }

            $response = [
                'status' => 1,
                'message' => 'Your Address Has Been Uploaded.',
            ];
        } else {
            $response = [
                'status' => 0,
                'message' => 'Failed To Add New Address, Try Again Later',
            ];
        }
        echo json_encode($response);
}
