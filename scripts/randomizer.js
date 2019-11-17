// ninja text
window.onload = window.onload.extend(function(){
  if(!sessionStorage.ninjaValue){
		data=JSON.parse(sessionStorage.randomizerDataList);
		console.log("initial data parse:\n"+data);
		changeList(sessionStorage.randomizerValue, 0);
		getData(sessionStorage.randomizerValue);
		console.log("datalist created");
	}
	else{
		document.querySelector("#ninja").innerHTML = sessionStorage.ninjaValue;
		changeList(sessionStorage.randomizerValue, 0);
		console.log("datalist loaded");
	}
	console.log("onload complete");
	console.log("\n\n\n");
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
var list=[];
var data="";
var k=0;
var n0="All";
var n1=0;
var n2=0;
var n3=list.length

function changeList(num, reset){
	data=JSON.parse(sessionStorage.randomizerDataList);
	sessionStorage.randomizerValue = num;
	let i = Math.floor(num/25);
	if(data[i][4].length == 0 || reset == 1){
		if (i == 0){
			data[i][4]=listUseless.concat(listUseful.concat(listUser));
		}
		else if (i == 1) {
			data[i][4]=listUseless.concat();
		}
		else if (i == 2) {
			data[i][4]=listUseful.concat();
		}
		else if (i == 3) {
			data[i][4]=listUser.concat();
		}
		n3=data[i][4].length;
	}
	list=data[i][4];
	console.log("\n\n"+list);

	if(i != k){
		k=i;
		getData(num);
	}
}

function getData(num){
	let i = Math.floor(num/25);
	console.log("=======================\n=======================");
	console.log("current slider stage: "+i);
	if(data[i][0]==n0){
		data[i][0]=n0;data[i][1]=n1;data[i][2]=n2;
	}
	if(data[i][3]==0){
		data[i][3]=n3;
	}
	data[i][4]=list;
	n0=data[i][0];n1=data[i][1];n2=data[i][2];n3=data[i][3];
	console.log("current data array: \n"+data[i]);
	sessionStorage.ninjaValue = n0+" pages viewed: "+n1+"</br>Total pages: "+n3+"</br>Cycles completed: "+n2;
	document.getElementById("ninja").innerHTML = sessionStorage.ninjaValue;
	console.log("ninja changed: \n"+sessionStorage.ninjaValue);
	sessionStorage.randomizerDataList	= JSON.stringify(data);
}

// случайное целое число из диапазона
function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPage(){
	let i=Math.floor(sessionStorage.randomizerValue/25);
	n1+=1;
	var index=getRndInt(0, data[i][4].length); // индекс сайта
	if (list.length != 0){
		var item=list[index]; // сайт по индексу из общего списка
		var win=window.open(item, '_blank'); // открытие сайта в новой вкладке
		win.focus(); // в рабочем окне
		console.log("list to get from: "+list);
		list.splice(index, 1); // удаление элемента из списка по индексу
		console.log("    opened: "+item);
		console.log("    items left: "+list.length);
	}

	// если список закончился
	if (list.length == 0){
		console.log("        resetting list");
		n2+=1; // количество прохождений всех сайтов
		changeList(sessionStorage.randomizerValue, 1); // генерируется новый ,такой же, список
		console.log("        list resetted, items left: "+list.length);
	}
	getData(sessionStorage.randomizerValue);
}
