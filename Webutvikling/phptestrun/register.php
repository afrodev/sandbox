<?php
$mysqli = new mysqli('localhost', 'root', 'root', 'kontaktskjema')

if($mysqli->connect_error){
    die($mysqli->connect_error. ":" .$mysqli->connect_error)
}

$navn = $_POST["name"];
$alder = $_POST["age"];
$beskrivelse = $_POST["description"];

$sql = "INSERT INTO person (name, age , description) VALUES ('$navn', $alder', $beskrivelse')";
if($mysqli->query($sql) === TRUE){
    echo "Det ble sendt"
} else{
    echo "Error" . $sql . "<br>" . $mysqli
}

header("Location: about-us.php")

?>