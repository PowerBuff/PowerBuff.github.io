<?php
header('Content-Type: application/json');

// Replace with your email
$to = "tarek.akkaoui2004@gmail.com"; 

$subject = "New Contact Form Submission";

$name = $_POST["name"] ?? '';
$email = $_POST["email"] ?? '';
$subjectInput = $_POST["subject"] ?? '';
$comments = $_POST["comments"] ?? '';

$message = "You have received a new message from your website:\n\n";
$message .= "Name: $name\n";
$message .= "Email: $email\n";
$message .= "Subject: $subjectInput\n\n";
$message .= "Message:\n$comments\n";

$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["result" => "success"]);
} else {
    echo json_encode(["result" => "error", "errors" => ["mail" => "Failed to send email."]]);
}
