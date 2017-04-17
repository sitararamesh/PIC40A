function saveEntry(){
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var lat = document.getElementById("lat").value;
	var lng = document.getElementById("lng").value;
	var parking_type = document.getElementById("parking_type").value;
	var type = document.getElementById("type").value;
	var description = document.getElementById("description").value;
	var expires = "Sat, 1 Jul 2017 12:00:00 UTC";
	var text = name + "|" + address + "|" + lat + "|" + lng + "|" + type + "|" + parking_type + "|" + description;
	document.cookie="my_cookie="+ text + "; expires=" + expires;
	//console.log(document.cookie);
}

function loadEntry(){
	var entries = document.cookie.split(";")[0].split("=")[1].split("|");
	//console.log(entries);
	document.getElementById("name").value = entries[0];
	document.getElementById("address").value = entries[1];
	document.getElementById("lat").value = entries[2];
	document.getElementById("lng").value = entries[3];
	document.getElementById("type").value = entries[4];
	document.getElementById("parking_type").value = entries[5];
	document.getElementById("description").value = entries[6];
}
