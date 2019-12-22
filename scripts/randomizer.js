// ninja text
window.onload = window.onload.extend(function(){
  if(!sessionStorage.ninjaValue){
		data=JSON.parse(sessionStorage.randomizerDataList);
		console.log("initial data parse:\n"+data);
		changeList(sessionStorage.randomizerValue, 0);
		console.log("datalist created");
	}
	else{
		document.querySelector("#ninja").innerHTML = sessionStorage.ninjaValue;
		changeList(sessionStorage.randomizerValue, 0);
		console.log("datalist loaded");
	}
  data[0][3]=listUser.length+listUseless.length+listUseful.length;
  data[1][3]=listUseless.length;
  data[2][3]=listUseful.length;
  data[3][3]=listUser.length;
  getData(sessionStorage.randomizerValue);
	console.log("onload complete");
	console.log("\n\n\n");
})


let request = new XMLHttpRequest();
request.open("GET", "../data/website_list.json", false);
request.send(null)
var website_data = JSON.parse(request.responseText);

// не очень полезные сайты
var listUseless=[];
for(let i = 0; i<(website_data.listUseless).length; i++){
  listUseless.push(website_data.listUseless[i].link);
};
// полезные сайты
var listUseful=[];
for(let i = 0; i<(website_data.listUseful).length; i++){
  listUseful.push(website_data.listUseful[i].link);
};
// пользовательские сайты
var listUser=[];
for(let i = 0; i<(website_data.listUser).length; i++){
  listUser.push(website_data.listUser[i].link);
};
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
			data[i][4]=listUseless;
		}
		else if (i == 2) {
			data[i][4]=listUseful;
		}
		else if (i == 3) {
			data[i][4]=listUser;
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
	sessionStorage.ninjaValue ="<div style='display:inline; color:black;'>This session stats:</div></br>"+ n0+" pages viewed: "+n1+"</br>Total pages: "+n3+"</br>Cycles completed: "+n2;
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
		var item='http://'+list[index]; // сайт по индексу из общего списка
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
