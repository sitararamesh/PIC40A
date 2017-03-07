//storing the index with max frequency
var max_index;

//storing max frequency
var max_f;

//storing tag with max frequency
var max_tag;

//array to store all different tags
var tag_arr;

//array to store all frequencies for different tags
//should have the same size as tag_array
var f_arr;


function resetArea(){
	document.getElementsByTagName("textarea")[0].value = "grape cherry cherry apple pineapple cherry apple banana apple pineapple banana pineapple apple pineapple pineapple pineapple banana apple banana peach plum peach plum grape lemon lemon peach lemon lime lime lemon lemon lemon peach peach mango guava mango lemon lemon lemon peach cherry cherry cherry lime lime plum pineapple cherry pineapple"
}


function saveCloud(){
//save cloud using cookie
//get content of the textarea (using getElementById)
//store it in a string
//make cookie string out of that
	var text = document.getElementById("tags").value;
	var expires = "Sat, 1 Mar 2017 12:00:00 UTC";
	document.cookie="my_cookie="+ text +"; expires=" + expires;
}

function loadCloud(){
//retrieve cookie
//parse cookie to get saved cloud
//store it in a string
//assign that string to value of the textarea (using getElementById)
	document.getElementById("tags").value = document.cookie.split("=")[1].split(";")[0];

}

function clearArea(){
	document.getElementsByTagName("textarea")[0].value="";
}

function maxTag() {
	max_index = 0;
	for(i = 0; i < f_arr.length; ++i) {
		if (f_arr[i] > f_arr[max_index]) {
			max_index = i;
		}
	}
	max_f =f_arr[max_index];
	max_tag = tag_arr[max_index];
}

function makeCloud()
{
	// 2. i. grab the contents of the textarea, a string of tags separated by spaces.
    var text = document.getElementById("tags").value;
    var text_arr = text.split(" ");
    // 2. ii. parse that string into an array of tag strings, sorted by lexicographic ordering.
    text_arr.sort();
    // 2. iii. 1 array with tags, 1 array with frequencies of these tags
    tag_arr = new Array();
    f_arr = new Array();
    // Populating the arrays
    var cur = "";
    // For each tag in the sorted array, if we've not seen it before, add it to the array. If we have seen it before, increment its frequency
    for(i = 0; i < text_arr.length; i++){
		if (text_arr[i] != cur){
	    	cur = text_arr[i];
	    	tag_arr.push(cur);
	    	f_arr.push(1);
		}	
		else{
	    	f_arr[f_arr.length - 1]++; 
		}
    }

    
    //2. v. Finding tag with maximum frequency
    maxTag();
    
    //2. vi. Creating the cloud
    displayCloud();
}



//function to remove old cloud
function removeCloud(){
    var containerNode = document.getElementById("container");
    var oldTCnode = document.getElementById("tagcloud");
    if (oldTCnode != null)    {
    	containerNode.removeChild(oldTCnode);
    }
}



function calculateFontSize(i){
	return Math.round((20 * f_arr[i]/max_f) + 15);
}


//helper function to alert the frequency of a tag when clicked
function alertTag(i){
    alert("\"" + tag_arr[i] + "\" occurs " + f_arr[i] + " times.");
}


// 2. vi, vii, viii, ix, x
function displayCloud(){
	// 2. x. Remove and add tag clouds
	removeCloud();
	var containerNode = document.getElementById("container");    
	var newTC = document.createElement("div");
	newTC.id = "tagcloud";
	// Tag Cloud Styling
	newTC.style.border = ".1em solid silver";
	newTC.style.backgroundColor = "blue";
	newTC.style.color="silver";
	newTC.style.fontFamily= "serif";
	newTC.style.fontSize="x-large";
	// Add it
	containerNode.appendChild(newTC);
	var newTCnode = document.getElementById("tagcloud");
	// Populate Tag Cloud
	for(i = 0; i < tag_arr.length; ++i){
		var newSpan = document.createElement("span");
		newSpan.id = "tag" + i;
		// Setting font size
		newSpan.style.fontSize =  calculateFontSize(i) + "pt";
		newSpan.style.display = "inline-block";
		newSpan.style.padding = "5px";
		newTCnode.appendChild(newSpan);
		var newSpannode = document.getElementById("tag" + i);
		newSpannode.innerHTML = tag_arr[i];
		newSpannode.setAttribute("onclick","alertTag(" + i + ")");

    }        
}
