<?php
// Allow access from any origin
header('Access-Control-Allow-Origin:*'); // This sets the HTTP response header to allow cross-origin requests

// Include the database connection file
include('connect.php'); // This includes the file that establishes a connection to the database using mysqli

// Get the JSON data from the request body
$json=file_get_contents("php://input"); // This reads the raw data from the input stream and assigns it to a variable

// Decode the JSON data into an associative array
$data = json_decode($json, true); // This parses the JSON data and converts it to an array with keys and values

// Get the name, phone number, email and password from the data array
$Name=$data['Name']; // This assigns the value of the Name key to a variable
$PhoneNumber=$data['PhoneNumber']; // This assigns the value of the PhoneNumber key to a variable
$Email=$data['Email']; // This assigns the value of the Email key to a variable
$Password =$data['Password']; // This assigns the value of the Password key to a variable

// Create a SQL query to insert a new user into the database
$submit= "insert into register(Name, PhoneNumber, Email, Password) values('$Name', '$PhoneNumber','$Email','$Password')"; // This creates a SQL query string that inserts a new row into the register table with the user input values

// Execute the query and get the result
$submit= mysqli_query($connection, $submit); // This executes the query on the database connection and returns a boolean value indicating success or failure

if($submit){
    // If the query was successful, create a success message and user details array
    $msg= "Submitted successfully"; // This sets a message variable with a success value
}
else{
    // If the query failed, create an error message
    $msg= "Something went wrong. User registration failed.";  // This sets a message variable with an error value
} 

$data=array('msg'=>$msg,
'Name'=>$Name); // This creates a new data array with the message and user name values

// Encode the data array as JSON and return it in the response body
echo json_encode($data); // This converts the data array to a JSON string and prints it to the output stream
?>