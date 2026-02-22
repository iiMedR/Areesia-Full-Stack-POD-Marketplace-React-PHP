<?php
include 'password.php';
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));
        $email = $data->email;
        $password = $data->password;

        $query = "SELECT * FROM clients WHERE email = :email";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            if (verifyPassword($password, $result['Password'])) {
                // Prepare response
                $response = [
                    'status' => 1,
                    'message' => 'Authentication successful',
                    'id' => $result['Id'],
                    'firstName' => $result['FirstName'],
                    'lastName' => $result['LastName'],
                    'phoneNumber' => $result['PhoneNumber'],
                    'email' => $result['Email'],
                    'birthday' => $result['Birthday'],
                    'defaultPassword' => $result['DefaultAddressId'],
                    'emailConfirmation' => $result['EmailConfirmation'],
                ];
            } else {
                // Password is incorrect, return failure
                $response = ['status' => 0, 'message' => 'Incorrect password or email'];
            }
        } else {
            // Email doesn't exist, return failure
            $response = ['status' => 0, 'message' => 'Incorrect email or password'];
        }

        echo json_encode($response);
}
