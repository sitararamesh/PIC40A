function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(34.068770, -118.444935),
          zoom: 15
        });
        var infoWindow = new google.maps.InfoWindow;
      
  downloadUrl('http://www.pic.ucla.edu/~sitararamesh/parking/locations.php', function(data) {
    var xml = data.responseXML;
    var locations = xml.documentElement.getElementsByTagName('location');
    Array.prototype.forEach.call(locations, function(locationElem) {
      var name = locationElem.getAttribute('name');
      var address = locationElem.getAttribute('address');
      var type = locationElem.getAttribute('type');
      var up_votes = locationElem.getAttribute('up_votes');
      var down_votes = locationElem.getAttribute('down_votes');
      var parking_type = locationElem.getAttribute('parking_type');
      var description = locationElem.getAttribute('description');
      var point = new google.maps.LatLng(
          parseFloat(locationElem.getAttribute('lat')),
          parseFloat(locationElem.getAttribute('lng'))
       );
     // console.log(name);

      var infowincontent = document.createElement('div');
      var strong = document.createElement('strong');
      strong.textContent = name;
      infowincontent.appendChild(strong);
      infowincontent.appendChild(document.createElement('br'));

      var text = document.createElement('text');
      text.textContent = address;
      infowincontent.appendChild(text);
      var icon = {};
      var location = new google.maps.Marker({
        map: map,
        position: point,
        label: icon.label
      });
      location.addListener('click', function() {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, location);
        displayInfo(locationElem);
      });
    });
  });
}

function displayInfo(locationElem) {
  document.getElementById('info').innerHTML = "";
  var type = locationElem.getAttribute('type');
  var up_votes = locationElem.getAttribute('up_votes');
  var down_votes = locationElem.getAttribute('down_votes');
  var parking_type = locationElem.getAttribute('parking_type');
  var description = locationElem.getAttribute('description');
  var title = document.createElement('h1');
  title.textContent = locationElem.getAttribute('name');
  title.setAttribute('id', "main_heading");
  document.getElementById('info').appendChild(title);
  var address = document.createElement('h3');
  address.textContent = locationElem.getAttribute('address') + ", Los Angeles, CA 90024";
  document.getElementById('info').appendChild(address);
  var description = document.createElement('p');
  description.textContent = locationElem.getAttribute('description');
  document.getElementById('info').appendChild(description);
 
  //displaying paid or free
  var pay = document.createElement("p");
  if (parking_type=="paid") {
    pay.textContent = "Type: Paid Parking";
  }
  else {
    pay.textContent = "Type: Free Parking";
  }
  document.getElementById("info").appendChild(pay);
  //displaying lot type
  var lot = document.createElement("p");
  if (type=="open_garage") {
    lot.textContent = "Lot type: Above Ground";
  }
  else if (type=="covered_garage") {
    lot.textContent = "Lot type: Covered Garage";
  }
  else {
    lot.textContent = "Lot type: Street Parking";
  }
  document.getElementById("info").appendChild(lot);

  //add parking
  var link = document.createElement('p');
  link.innerHTML = '<a href="add_parking.html">Add a Parking Lot</a>';
  document.getElementById('info').appendChild(link);


}


function downloadUrl(url, callback) {
var request = window.ActiveXObject ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest;

request.onreadystatechange = function() {
  if (request.readyState == 4) {
    request.onreadystatechange = doNothing;
    callback(request, request.status);
  }
};

request.open('GET', url, true);
request.send(null);
}

function doNothing() {}