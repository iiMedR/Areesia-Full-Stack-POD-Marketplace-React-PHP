<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

function sendEmailByDesignerEmail($conn, $designerEmail) {

    $designerData = getDesignerDataByEmail($conn, $designerEmail);

    if($designerData['status'] === 0){
        return [
            'status' => 0,
            'message' => 'Could not find the email'
        ];
        exit();
    } else {
        $designer = $designerData['data'];
        $verificationToken = bin2hex(random_bytes(16));

        $query = "INSERT INTO artist(DesignerId , Token) VALUES (:designerId,:token)";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':designerId', $designer['Id']);
        $stmt->bindParam(':token', $verificationToken);
        if($stmt->execute()){

            $mail = new PHPMailer(true);
            try{
                //Server settings
                //echo ('smtp dkhel ***********'.$email.'****************');
                $mail->SMTPDebug = 0;                                       //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp-relay.brevo.com';            //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'EMAIL';                   //SMTP username
                $mail->Password   = 'PASSWORD';                     //SMTP password
                $mail->SMTPSecure = 'tls';                                  //Enable implicit TLS encryption
                $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
                $mail->setFrom('ii.medr4321@gmail.com', 'Mohamed Reda');
                $mail->addAddress($designerEmail);
    
                $mail->isHTML(true);                                        //Set email format to HTML
                $mail->Subject = 'Email Confirmation';
                $verificationLink = 'http://localhost:3000/confirmation';
                $mail->Body    = '<p>Please click on the following link to verify your email address:</p><p><a href="http://localhost:3000/confirmation?c='.$verificationToken.'&di='.$designer['Id'].'">' . $verificationLink . '</a></p>';
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
                if($mail->send()){
                    return [
                        'status' => 1,
                        'message' => 'Message has been sent, check Your email inbox!.',
                    ];
                } else {
                    // Failed to send email
                    return [
                        'status' => 0,
                        'message' => 'Failed to send email'
                    ];
                }
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        }


    }


}
