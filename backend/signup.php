<?php

include 'password.php';
include 'DbConnect.php';

$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "POST":
        $data = json_decode(file_get_contents('php://input'));

        $email = $data->email;
        $query = "SELECT email FROM clients WHERE email = :email";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            $response = ['status' => 0, 'message' => 'Email already exists'];
            echo json_encode($response);
            exit();
        }

        $hashed_password = hashPassword($data->password);
        $firstName = $data->firstName;
        $lastName = $data->lastName;
        $email = $data->email;
        //** 0 = false, 1 = true */
        $emailConfirmation = 0;

        $sql = "INSERT INTO clients(id, FirstName, LastName, Password, Email, EmailConfirmation) VALUES(null, :firstName, :lastName, :password, :email, :emailConfirmation) ";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':firstName', $firstName);
        $stmt->bindParam(':lastName', $lastName);
        $stmt->bindParam(':password', $hashed_password);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':emailConfirmation', $emailConfirmation);

        if ($stmt->execute()) {
            $sql = "SELECT * FROM clients WHERE email = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $data->email);
            $stmt->execute();
            $client = $stmt->fetch(PDO::FETCH_ASSOC);
            $response = [
                'status'=> 1,
                'message' => 'The account created successfully',
                'id' => $client['Id'],
                'firstName' => $client['FirstName'],
                'lastName' => $client['LastName'],
                'phoneNumber' => $client['PhoneNumber'],
                'email' => $client['Email'],
                'birthday' => $client['Birthday'],
                'emailConfirmation' => $client['EmailConfirmation'],
            ];
        } else {
            $response = ['status'=> 0,'message' => 'Failed To Create Account'];
        }
        echo json_encode($response);
}

