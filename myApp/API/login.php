<?php
// Allow access from any origin
header('Access-Control-Allow-Origin:*'); // This sets the HTTP response header to allow cross-origin requests

// Include the database connection file
include('connect.php'); // This includes the file that establishes a connection to the database using mysqli

// Get the JSON data from the request body
$json=file_get_contents("php://input"); // This reads the raw data from the input stream and assigns it to a variable

// Decode the JSON data into an associative array
$data = json_decode($json, true); // This parses the JSON data and converts it to an array with keys and values

// Get the email and password from the data array
$Email=$data['Email']; // This assigns the value of the Email key to a variable
$Password =$data['Password']; // This assigns the value of the Password key to a variable

// Query the database for a user with matching email and password
$query="select * from register where Email ='$Email' and Password='$Password'"; // This creates a SQL query string that selects all columns from the register table where the email and password match the user input
$result= mysqli_query($connection, $query); // This executes the query on the database connection and returns a result object

// Count the number of rows returned by the query
$count= mysqli_num_rows($result); // This counts how many rows are in the result object

if($count==1){
    // If there is exactly one row, fetch it as an associative array
    $result = mysqli_fetch_array($result); // This fetches one row from the result object and returns it as an array with keys and values
    
    // Create a new data array with success message and user details
    $data = array(
        'msg'=>'Success', // This sets a message key with a success value
        'Name'=>$result['Name'], // This sets a Name key with the value from the result array
        'Email'=>$result['Email'], // This sets an Email key with the value from the result array
        'PhoneNumber'=>$result['PhoneNumber'], // This sets a PhoneNumber key with the value from the result array
        'Password'=>$result['Password'], // This sets a Password key with the value from the result array
    );
}
else{
    // If there are zero or more than one rows, return an error message
    $data=array('msg'=>'Incorrect email or password'); // This sets a message key with an error value
}

// Encode the data array as JSON and return it in the response body
echo json_encode($data); // This converts the data array to a JSON string and prints it to the output stream
?>