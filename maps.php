#!/usr/local/bin/php
<!DOCTYPE html>
<?php 
?>
<html>
<head>
    <meta charset="utf-8">
	<title>Westwood Parking Map</title> 
    <link rel="stylesheet" type="text/css" href="maps.css">
    <script type="text/javascript" src="vote.js">
	</script>
    <script type="text/javascript" src="maps.js">
	</script>
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">


</head>

<body>
<table>
<tr>
<td id="map">
<!-- Google Maps API -->
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCel8bgIabHrdveytoJSeijaKMrckzZx0k&callback=initMap">
</script>
</td>
<td id="info">

<h1 id="main_text">Select a Parking Lot to find more information or <a href="add_parking.html">Add a Parking Lot</a></h1>
</td>
</tr>
</table>
</body>

