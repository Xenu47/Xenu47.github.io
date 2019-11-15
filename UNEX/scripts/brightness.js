window.onload = function(){
	if(!localStorage.brightness){
		localStorage.brightness = 100;
	}
	else{
		document.querySelector("#brightness-control").value = localStorage.brightness;
		document.querySelector("#night-mode").style.setProperty("opacity", (1 - localStorage.brightness/100));
	}
}

function changeBrightness(){
	localStorage.brightness = document.querySelector("#brightness-control").value;
	var newval = ((25-localStorage.brightness)*0.04);
	document.querySelector("#night-mode").style.setProperty("opacity", (1 - localStorage.brightness/100));

	if(localStorage.brightness <= 25){
		document.querySelector("#night-mode-image").style.setProperty("pointer-events", "all");
		document.querySelector("#night-mode-image").style.setProperty("opacity", newval);
	}
	else{
		document.querySelector("#night-mode-image").style.setProperty("pointer-events", "none");
		document.querySelector("#night-mode-image").style.setProperty("opacity",  0);
	}
}