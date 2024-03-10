<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $enquiry = $_POST['enquiry'];

    // You can specify the file path where you want to store the form data.
    $file = 'form_data.txt';

    // Create or append to the file with the form data.
    file_put_contents($file, "Email: $email\nPhone: $phone\nEnquiry: $enquiry\n\n", FILE_APPEND);

    // Redirect the user to a thank you page or back to the form page.
    header("Location: thank_you.html");
    exit;
} else {
    // Handle the case where the form is not submitted.
    header("Location: index.php");
    exit;
}
?>
