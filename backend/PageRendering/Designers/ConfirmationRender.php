<?php
include '../../DbConnect.php';
include '../../fetchingData.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        
        $designerId = $data->id;
        $designerData = getDesignerDataById($conn, $designerId);
        $confirmationStatus = 1;
        
        if($designerData['status'] === 0){
            $response = [
                'status' => 0,
                'message' => $designerData['message']
            ];
        } else {
            $designer = $designerData['data'];

            if($designer['EmailConfirmation'] === '1'){
                $response = [
                    'status' => 0,
                    'message' => 'Email Already Confirmed'
                ];
            } else {
                $query = 'UPDATE designer SET EmailConfirmation = :emailConfirmation WHERE Id = :id';
                $stmt = $conn->prepare($query);
                $stmt->bindParam(':id', $designerId, PDO::PARAM_INT);
                $stmt->bindParam(':emailConfirmation', $confirmationStatus);

                if($stmt->execute()){
                    $response = [
                        'status' => 1,
                        'message' => 'Email Is Successfully Confirmed'
                    ];
                } else {
                    $response = [
                        'status' => 0,
                        'message' => 'Faild To Confirm Your Email, Try Again Later Or Contact Support'
                    ];
                }
            }
        }

        echo json_encode($response);
        

}
