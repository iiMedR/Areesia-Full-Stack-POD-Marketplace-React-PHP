<?php
include '../../DbConnect.php';
include '../../fetchingData.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        
        $clientId = $data->id;

        $addresses = getAddressesDataByClientId($conn, $clientId);
        $data = getClientDataById($conn, $clientId);
        $defaultAddress = $data['data']['DefaultAddressId'];
        if($addresses['status'] === 1){
            if($data['status'] === 1){
                $response = [
                    'status' => 1,
                    'message' => 'Addresses Fetched',
                    'data' => $addresses,
                    'defaultAddress' => $defaultAddress
                ];
            } else {
                $response = [
                    'status' => 1,
                    'message' => 'Addresses Fetched',
                    'data' => $addresses,
                    'defaultAddress' => '0'
                ];
            }
        } else {
            $response = [
                'status' => $addresses['status'],
                'message' => $addresses['message'],
            ];
        }
        echo json_encode($response);

}
