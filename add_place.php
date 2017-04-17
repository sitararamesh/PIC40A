#!/usr/local/bin/php -d display_errors=STDOUT
<!DOCTYPE html>
<html>
<head>
	<script>
		function goToMap() {
			window.location = "maps.php";
		}
	</script>
</head>
<body onload="goToMap();">
<?php
	// Gets data from URL parameters.
	$name = $_GET['name'];
	$address = $_GET['address'];
	$lat = $_GET['lat'];
	$lng = $_GET['lng'];
	$type = $_GET['type'];
	$description = $_GET['description'];
	$parking_type = $_GET['parking_type'];

	// Connect to db
	try
	{
	  $db = new SQLite3('parking.db');
	}
	catch (Exception $exception)
	{
	  echo '<p>There was an error connecting to the database!</p>';
	  if ($db)
	  {
	    echo $exception->getMessage();
	  }
	}

	// insert
	$table = "locations";
	$field1 = "name";	
	$field2 = "address";
	$field3 = "lat";
	$field4 = "lng";
	$field5 = "type";
	$field6 = "description";
	$field7 = "parking_type";
	$field8 = "up_votes";
	$field9 = "down_votes";

	$sql = "INSERT INTO $table ($field1, $field3, $field4, $field5, $field2, $field6, $field7, $field8, $field9)  VALUES ('$name', $lat, $lng, '$type', '$address', '$description', '$parking_type', 0 , 0)";
	$result = $db->query($sql);
?>
</body>