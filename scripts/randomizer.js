// ninja text
window.onload = window.onload.extend(function(){
	console.log("onload complete");
  if(!sessionStorage.ninjaValue){
		getData(sessionStorage.randomizerValue);
	}
	else{
		document.querySelector("#ninja").innerHTML = sessionStorage.ninjaValue;
	}
})

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
var listUser=[
	"https://scrollbars.matoseb.com"
];
// все вместе
var list=listUseless.concat(listUseful.concat(listUser));
var n0="All";
var n1=0;
var n2=0;
var n3=list.length

function getData(num){
	let i = Math.floor(num/25);
	console.log("current slider stage: "+i);
	var data=JSON.parse(sessionStorage.randomizerList);
	if(data[i][0]==n0){
		data[i][0]=n0;data[i][1]=n1;data[i][2]=n2;
	}
	data[i][3]=n3;
	n0=data[i][0];n1=data[i][1];n2=data[i][2];
	console.log("current data array: "+data[i]);
	document.getElementById("ninja").innerHTML = n0+" pages viewed: "+n1+"</br>Total pages: "+n3+"</br>Cycles complete: "+n2;
	sessionStorage.ninjaValue = n0+" pages viewed: "+n1+"</br>Total pages: "+n3+"</br>Cycles complete: "+n2;
	sessionStorage.randomizerList = JSON.stringify(data);
}

function changeList(i){
	sessionStorage.randomizerValue = i;
	if (i < 25){
		list=listUseless.concat(listUseful.concat(listUser));
	}
	else if (i < 50) {
		list=listUseless.concat();
	}
	else if (i < 75) {
		list=listUseful.concat();
	}
	else if (i < 100) {
		list=listUser.concat();
	}
	n3=list.length;
	getData(i);
}

// случайное целое число из диапазона
function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPage(){
	n1+=1;
	var index=getRndInt(0, list.length); // индекс сайта
	if (list.length != 0){
		var item=list[index]; // сайт по индексу из общего списка
		var win=window.open(item, '_blank'); // открытие сайта в новой вкладке
		win.focus(); // в рабочем окне
		list.splice(index, 1); // удаление элемента из списка по индексу
	}

	// если список закончился
	if (list.length == 0){
		n2+=1; // количество прохождений всех сайтов
		changeList(sessionStorage.randomizerValue); // генерируется новый ,такой же, список
	}
	getData(sessionStorage.randomizerValue);
}
