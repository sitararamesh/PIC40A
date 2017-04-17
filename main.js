function moveCar()
{
	var divObj = document.getElementById("car");
	divObj.style.left="10px";
	var id = setInterval(moveCarhelper, 10);
	var count = 0;
	function moveCarhelper()
	{
		var pixels = divObj.style.left;

		pixels = parseInt(pixels) + 1;
		count++;
		divObj.style.left = pixels + "px";
		if (count == 800)
		{
			clearInterval(id);
		}
	}
}

// Ajax animations
$(document).ready(function() {
	$("#no").delay(6000).fadeIn(1000);
});
$(document).ready(function() {
	$("#first").delay(8000).fadeIn(2000);
});
$(document).ready(function() {
	$("#first").delay(500).fadeOut(1000);
});
$(document).ready(function() {
	$("#second").delay(10000).fadeIn(2000);
});
$(document).ready(function() {
	$("#second").delay(500).fadeOut(1000);
});
$(document).ready(function() {
	$("#car").delay(12000).fadeOut(1000);
});
$(document).ready(function() {
	$("#no").delay(4500).fadeOut(1000);
});
$(document).ready(function() {
	$("#enter").delay(12000).fadeIn(2000);
}); 