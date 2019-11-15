// не очень полезные сайты
var listUseless=[
	"http://heeeeeeeey.com",
	"http://tinytuba.com",
	"http://corndog.io",
	"http://cant-not-tweet-this.com",
	"http://weirdorconfusing.com",
	"https://www.eyes-only.net",
	"http://eelslap.com",
	"http://www.staggeringbeauty.com",
	"http://burymewithmymoney.com",
	"http://endless.horse",
	"http://www.republiquedesmangues.fr",
	"http://www.movenowthinklater.com",
	"http://www.partridgegetslucky.com",
	"http://www.rrrgggbbb.com",
	"http://beesbeesbees.com",
	"http://www.koalastothemax.com",
	"http://www.everydayim.com",
	"http://cat-bounce.com",
	"http://chrismckenzie.com",
	"http://hasthelargehadroncolliderdestroyedtheworldyet.com",
	"http://ninjaflex.com",
	"http://ihasabucket.com",
	"http://corndogoncorndog.com",
	"http://imaninja.com",
	"http://www.ismycomputeron.com",
	"http://www.nullingthevoid.com",
	"http://www.muchbetterthanthis.com",
	"http://www.yesnoif.com",
	"http://iamawesome.com",
	"http://www.pleaselike.com",
	"http://crouton.net",
	"http://www.wutdafuk.com",
	"http://unicodesnowmanforyou.com",
	"http://www.crossdivisions.com",
	"http://tencents.info",
	"http://www.patience-is-a-virtue.org",
	"http://whitetrash.nl",
	"http://www.theendofreason.com",
	"http://pixelsfighting.com",
	"http://isitwhite.com",
	"http://onemillionlols.com",
	"http://www.omfgdogs.com",
	"http://oct82.com",
	"http://chihuahuaspin.com",
	"http://www.blankwindows.com",
	"http://dogs.are.the.most.moe",
	"http://tunnelsnakes.com",
	"http://www.trashloop.com",
	"http://www.ascii-middle-finger.com",
	"http://buildshruggie.com",
	"http://buzzybuzz.biz",
	"http://yeahlemons.com",
	"http://burnie.com",
	"http://wowenwilsonquiz.com",
	"https://thepigeon.org",
	"http://www.amialright.com"];
// полезные сайты
var listUseful=[
	"http://www.trypap.com",
	"http://randomcolour.com",
	"http://www.hackertyper.com",
	"https://pointerpointer.com",
	"http://corgiorgy.com",
	"http://spaceis.cool",
	"http://www.donothingfor2minutes.com",
	"http://notdayoftheweek.com",
	"http://notdayoftheweek.com",
	"http://nooooooooooooooo.com",
	"https://paletton.com",
	"https://htmlcolorcodes.com",
	"https://privnote.com",
	"http://whatthefuckshouldimakefordinner.com",
	"https://www.strawpoll.me",
	"https://fast.com",
	"https://gtmetrix.com",
	"https://vectr.com/new",
	"https://ru.lmgtfy.com",
	"https://www.myfonts.com/WhatTheFont",
	"https://everytimezone.com",
	"https://www.flightradar24.com"];
// пользовательские сайты
var listUser=[];
// все вместе
var list=listUseless.concat(listUseful.concat(listUser));
var n=0;

// случайное целое число из диапазона
function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPage(){
	var index=getRndInt(0, list.length); // индекс сайта
	var item=list[index]; // сайт по индексу из общего списка
	var win=window.open(item, '_blank'); // открытие сайта в новой вкладке
	win.focus(); // в рабочем окне
	list.splice(index, 1); // удаление элемента из списка по индексу

	// если список закончился
	if (list.length == 0){
		n+=1; // количество прохождений всех сайтов
		list=listUseless.concat(listUseful.concat(listUser)); // генерируется новый ,такой же, список

		// текст для психов, которые захотят потратить свое время 
		// на открытие всех сайтов по 200 раз
		if (n==1) {
			document.getElementById("ninja").innerHTML = "You've cycled through all pages "+n+" time";
		}
		else if (n<=3) {
			document.getElementById("ninja").innerHTML = "You've cycled through all pages "+n+" times";
		}
		else {
			document.getElementById("ninja").innerHTML = `
	<video width="530" height="300" autoplay controls>
		<source src="../images/stop.mp4" type="video/mp4">
		<source src="../images/stop.ogg" type="video/ogg">
	Your browser does not support the video tag.
	</video><br>
	WTF MAN?!?!? YOU'VE CYCLED THROUGH ALL PAGES `+n+` TIMES`;
		}
	}
}