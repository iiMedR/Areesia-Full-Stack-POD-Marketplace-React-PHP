<?php
include 'BaseURL.php';
// ****************************************************************** fetch Clients table
// --getClientDataById($conn, $clientId){} returns one row
// --getClientDataByEmail($conn, $clientEmail) {} returns one row

function getClientDataById($conn, $clientId) {

    $sql = "SELECT * FROM clients WHERE Id = :id";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $clientId, PDO::PARAM_INT);
    $stmt->execute();
    $client = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if client data is found
    if ($client) {
        // Return the client data
        return [
            'status' => 1,
            'message' => 'Client data retrieved successfully',
            'data' => $client
        ];
    } else {
        // Return an error message if client not found
        return [
            'status' => 0,
            'message' => 'Client not found'
        ];
    }
}

function getClientDataByEmail($conn, $clientEmail) {

    $sql = "SELECT * FROM clients WHERE Email = :email";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $clientEmail);
    $stmt->execute();
    $client = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if client data is found
    if ($client) {
        // Return the client data
        return [
            'status' => 1,
            'message' => 'Client data retrieved successfully',
            'data' => $client
        ];
    } else {
        // Return an error message if client not found
        return [
            'status' => 0,
            'message' => 'Client not found'
        ];
    }
}


// ****************************************************************** fetch Addresses table
// --getAddressDataById($conn, $AddressId) {fetching an address by the address ID} returns one row
// --getAddressesDataByClientId($conn, $clientId) {fetching addresses of a client by his id} returns an array of rows

function getAddressDataById($conn, $AddressId) {

    $sql = "SELECT * FROM addresses WHERE Id = :id";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $AddressId, PDO::PARAM_INT);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if client data is found
    if ($data) {
        // Return the client data
        return [
            'status' => 1,
            'message' => 'Address data retrieved successfully',
            'data' => $data
        ];
    } else {
        // Return an error message if client not found
        return [
            'status' => 0,
            'message' => 'address not found'
        ];
    }
}

function getAddressesDataByClientId($conn, $clientId) {

    $sql = "SELECT * FROM addresses WHERE ClientId = :clientId";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':clientId', $clientId);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if client data is found
    if ($data) {
        // Return the client data
        return [
            'status' => 1,
            'message' => 'Client addresses retrieved successfully',
            'data' => $data
        ];
    } else {
        // Return an error message if client not found
        return [
            'status' => 0,
            'message' => 'Client addresses not found'
        ];
    }
}



// ****************************************************************** fetch Designer table
// --getDesignerDataByEmail($conn, $designerEmail) {} returns one row
// --getDesignerDataById($conn, $designerId){} returns one row

function getDesignerDataByEmail($conn, $designerEmail) {

    $sql = "SELECT * FROM designer WHERE Email = :email";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $designerEmail);
    $stmt->execute();
    $designer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($designer) {
        if (isset($designer['Profile'])) {
            $designer['Profile'] = base64_encode($designer['Profile']);
        }
        if (isset($designer['Cover'])) {
            $designer['Cover'] = base64_encode($designer['Cover']);
        }

        return [
            'status' => 1,
            'message' => 'Designer data retrieved successfully',
            'data' => $designer
        ];
    } else {
        return [
            'status' => 0,
            'message' => 'Designer not found'
        ];
    }
}


function getDesignerDataById($conn, $designerId) {

    $sql = "SELECT * FROM designer WHERE Id = :id";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $designerId, PDO::PARAM_INT);
    $stmt->execute();
    $designer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($designer) {

         if (isset($designer['Profile'])) {
            $designer['Profile'] = base64_encode($designer['Profile']);
        }
        if (isset($designer['Cover'])) {
            $designer['Cover'] = base64_encode($designer['Cover']);
        }
        return [
            'status' => 1,
            'message' => 'Designer data retrieved successfully',
            'data' => $designer
        ];
    } else {
        return [
            'status' => 0,
            'message' => 'Designer not found'
        ];
    }
}



/*
// --getDesignerDataByEmail($conn, $designerEmail) {} returns one row
// --getDesignerDataById($conn, $designerId){} returns one row

function getDesignerDataByEmail($conn, $designerEmail) {

    $sql = "SELECT * FROM designer WHERE Email = :email";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $designerEmail);
    $stmt->execute();
    $designer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($designer) {

        $BaseURL = BaseURL();
        $designer['Profile'] = "$BaseURL/areesiaAPI/ImageServingScriptEmail.php?type=profile&email=" . $designerEmail;
        $designer['Cover'] = "$BaseURL/areesiaAPI/ImageServingScriptEmail.php?type=cover&email=" . $designerEmail;

        return [
            'status' => 1,
            'message' => 'Designer data retrieved successfully',
            'data' => $designer
        ];
    } else {
        return [
            'status' => 0,
            'message' => 'Designer not found'
        ];
    }
}


function getDesignerDataById($conn, $designerId) {

    $sql = "SELECT * FROM designer WHERE Id = :id";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $designerId, PDO::PARAM_INT);
    $stmt->execute();
    $designer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($designer) {

        $BaseURL = BaseURL();
        $designer['Profile'] = "$BaseURL/areesiaAPI/ImageServingScript.php?type=profile&id=" . $designerId;
        $designer['Cover'] = "$BaseURL/areesiaAPI/ImageServingScript.php?type=cover&id=" . $designerId;

        return [
            'status' => 1,
            'message' => 'Designer data retrieved successfully',
            'data' => $designer
        ];
    } else {
        return [
            'status' => 0,
            'message' => 'Designer not found'
        ];
    }
}
 */


// ****************************************************************** fetch Artist table
// --getArtistDataByDesignerId($conn, $designerId) {} returns one row

function getArtistDataByDesignerId($conn, $designerId) {

    $sql = "SELECT * FROM artist WHERE DesignerId = :designerId";
    
    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':designerId', $designerId);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
        return [
            'status' => 1,
            'message' => 'Artist data retrieved successfully',
            'data' => $data
        ];
    } else {
        return [
            'status' => 0,
            'message' => 'Failed to retreive Data by DesignerId'
        ];
    }
}