function mouseOver() {
	// статус "закрыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "0"){
		var i = -2;
		var step = 0.4;
	}
	// статус "открыт", задатся начальную позицию и скорость
	if(document.getElementById("inv_val").innerHTML == "2"){
		var i = 6;
		var step = -0.4;
	}
	// статус "в движении", тогда при повторном нажатии он не прекратит работу
	document.getElementById("inv_val").innerHTML = "1";

	var start = Date.now(); // время начала
	var timer = setInterval(function() {
		var timePassed = Date.now() - start; // количество пройденного времени
		// если оно больше чем нужно - присваивается новый статус
		if (timePassed >= 210) {
			if(step == 0.4){
				document.getElementById("inv_val").innerHTML = "2";
			}
			else{
				document.getElementById("inv_val").innerHTML = "0";
			}
			clearInterval(timer);
			return;
		}
		i = i + step; // новый отступ от верха
		dropdown(i); // применяется отсуп
	}, 10);
}

function dropdown(i){
	document.querySelector("#list_menu").setAttribute("style","top:"+(i*2)+"vh");
}
