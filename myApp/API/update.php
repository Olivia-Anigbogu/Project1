<?php
header('Access-Control-Allow-Origin: *'); // This sets the HTTP response header to allow cross-origin requests
include('connect.php'); // This includes the file that establishes a connection to the database using mysqli
$json=file_get_contents('php://input'); // This reads the raw data from the input stream and assigns it to a variable
$data = json_decode($json,true); // This parses the JSON data and converts it to an array with keys and values

$newEmail = $data['Email']; // This assigns the value of the Email key to a variable
$newPassword = $data['Password']; // This assigns the value of the Password key to a variable
$newName = $data['Name']; // This assigns the value of the Name key to a variable
$newPhoneNumber = $data['PhoneNumber']; // This assigns the value of the PhoneNumber key to a variable


$update = "UPDATE register SET Name = '$newName', Password = '$newPassword', Email = '$newEmail', PhoneNumber = '$newPhoneNumber' where PhoneNumber = '$newPhoneNumber' "; // This creates a SQL query string that updates the register table with the new user input values where the phone number matches

$submit = $connection->query($update); // This executes the query on the database connection and returns a boolean value indicating success or failure
// $count = mysqli_result($submit); 

if($submit){
    $select = "SELECT * FROM `register` WHERE `PhoneNumber` = '$newPhoneNumber';"; // This creates a SQL query string that selects all columns from the register table where the phone number matches
    $submit = mysqli_query($connection, $select); // This executes the query on the database connection and returns a result object
    $submit = mysqli_fetch_assoc($submit); // This fetches one row from the result object and returns it as an associative array
     $return = $submit; // This assigns the result array to a variable
     $return[ 'msg' ] = 'Your Profile has been updated successfully'; // This adds a message key with a success value to the return array

}else{
    $return = array(
       'msg'=>'Unsuccessfull, kindly try again.' // This creates a new array with an error message
    );
}
echo json_encode($return); // This converts the return array to a JSON string and prints it to the output stream
?>