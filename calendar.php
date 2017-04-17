#!/usr/local/bin/php -d display_errors=STDOUT
<?php
print '<?xml version = "1.0" encoding="utf-8"?>';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Calendar</title> 
<link rel="stylesheet" type="text/css" href="calendar.css" />
<link href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display" rel="stylesheet" />
</head>

<body>
<div class="container">

<h1>
Bruin Family Schedule for 
<?php
date_default_timezone_set('America/Los_Angeles');
$ts = time();
$year = date("Y",$ts);
$month = date("M",$ts);
$month_day = date("d",$ts);
$week_day = date("l",$ts);
$hour = date("h",$ts);
$ampm = date("a",$ts);
$minute = date("i", $ts);

echo "$week_day".", "."$month"." "."$month_day".", "."$year".", "."$hour".":"."$minute"."$ampm";
?>
</h1>

<table id="event_table">

	<tr> 
		<th class='hr_td_'> &nbsp; </th> 
		<th class='table_header'>Person A</th>
		<th class='table_header'>Person B</th>
		<th class='table_header'>Person C</th> 
	</tr> 
	
<?php

// GET_HOUR_STRING
function get_hour_string($ts){
	$hour_string = "";
	$hour = date("h",$ts);
	$ampm = date("a",$ts);
	$hour_string = "$hour:00$ampm";
	return $hour_string;
}

$hours_to_show = 12;
$timestamp = time();
for($row = 0; $row <= $hours_to_show; $row++)
{
echo "<tr class=";
if ($row % 2 == 0)
	echo '"even_row">';
else echo '"odd_row">';

echo '<td class="hr_td">'. get_hour_string($timestamp) . "</td>";
echo "<td></td>";
echo "<td></td>";
echo "<td></td>";
echo "</tr>";
$timestamp += 60 * 60;
} 
?> 
	
</table>


</div>
</body>

</html>