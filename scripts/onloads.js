Function.prototype.extend = function(fn) {
  var self = this;
  return function() {
    self.apply(this, arguments);
    fn.apply(this, arguments);
  };
};

// brightness
window.onload = function(){
	if(!sessionStorage .brightness){
		sessionStorage .brightness = 100;
	}
	else{
		document.querySelector("#brightness-control").value = sessionStorage .brightness;
		document.querySelector("#night-mode").style.setProperty("opacity", (1 - sessionStorage .brightness/100));
	}
}

// randomizer range
window.onload = window.onload.extend(function(){
	if(!sessionStorage.randomizerValue){
		sessionStorage.randomizerValue = 0;
	}
	else{
		document.querySelector("#randomizer_range").value = sessionStorage.randomizerValue;
    changeList(sessionStorage.randomizerValue);
	}
  var list = [["All", 0, 0, 0],["Useless", 0, 0, 0],["Useful", 0, 0, 0],["User", 0, 0, 0]];
  sessionStorage.randomizerList = JSON.stringify(list);
  console.log("created randomizerList")
})
