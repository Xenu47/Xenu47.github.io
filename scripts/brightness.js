function changeBrightness(){
	sessionStorage .brightness = document.querySelector("#brightness-control").value;
	var newval = ((25-sessionStorage .brightness)*0.04);
	document.querySelector("#night-mode").style.setProperty("opacity", (1 - sessionStorage .brightness/100));

	if(sessionStorage .brightness <= 25){
		document.querySelector("#night-mode-image").style.setProperty("pointer-events", "all");
		document.querySelector("#night-mode-image").style.setProperty("opacity", newval);
	}
	else{
		document.querySelector("#night-mode-image").style.setProperty("pointer-events", "none");
		document.querySelector("#night-mode-image").style.setProperty("opacity",  0);
	}
}
