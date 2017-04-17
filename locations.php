#!/usr/local/bin/php
<?php

function parseToXML($htmlStr)
{
  $xmlStr=str_replace('<','&lt;',$htmlStr);
  $xmlStr=str_replace('>','&gt;',$xmlStr);
  $xmlStr=str_replace('"','&quot;',$xmlStr);
  $xmlStr=str_replace("'",'&#39;',$xmlStr);
  $xmlStr=str_replace("&",'&amp;',$xmlStr);
  return $xmlStr;
}

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

// Select all the rows in the markers table
$sql = "SELECT * FROM locations";
$result = $db->query($sql);

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<location>';

// Iterate through the rows, printing XML nodes for each
while ($row = $result->fetchArray()){
  // Add to XML document node
  echo '<location ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'description="' . parseToXML($row['description']) . '" ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo 'type="' . parseToXML($row['type']) . '" ';
  echo 'parking_type="' . parseToXML($row['parking_type']) . '" ';
  echo 'up_votes="' . $row['up_votes'] . '" ';
  echo 'down_votes="' . $row['down_votes'] . '" ';
  echo '/>';
}

// End XML file
echo '</location>';

?>