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

window.onload = window.onload.extend(function(){
		if(!sessionStorage.username){
			sessionStorage.username = 'Guest';
		}
    if(sessionStorage.username != 'Guest'){
      let x = document.querySelectorAll('#form_area input');
      for (let i = 0; i < x.length; i++) {
        x[i].disabled = true;
      }
      document.querySelector('form > button').style.display = 'none';
      document.querySelector('form > a').style.display = 'none';
      document.querySelector('form > p').innerHTML = "You've already logged in";
    }
		document.querySelector('#account-name').innerHTML = sessionStorage.username;
		if(document.querySelector('#login_form')){document.querySelector('#login_form').addEventListener('submit',login);}
		if(document.querySelector('#register_form')){document.querySelector('#register_form').addEventListener('submit',register);}
		if(document.querySelector('#add_website')){document.querySelector('#add_website').addEventListener('submit',add_website);}
})

// randomizer range
window.onload = window.onload.extend(function(){
	if(!sessionStorage.randomizerValue){
		sessionStorage.randomizerValue = 0;
  	let list = [["All", 0, 0, 0, []],["Useless", 0, 0, 0, []],["Useful", 0, 0, 0, []],["User", 0, 0, 0, []]];
    sessionStorage.randomizerDataList = JSON.stringify(list);
    console.log("created randomizerDataList: \n"+sessionStorage.randomizerDataList);
	}
	else{
		if(document.querySelector("#randomizer_range")){
      document.querySelector("#randomizer_range").value = sessionStorage.randomizerValue;
      changeList(sessionStorage.randomizerValue, 0);
      console.log("randomizerList already exists: \n"+sessionStorage.randomizerDataList);
    }
	}
})

window.onload = window.onload.extend(function(){
		if(document.querySelector("#all")){
      if(sessionStorage.username != 'Guest'){
        document.querySelector('#add_website').style.setProperty('display', 'block');
      }
      let request = new XMLHttpRequest();
      request.open("GET", "../data/website_list.json", false);
      request.send(null)
      var website_data = JSON.parse(request.responseText);

      for(let i = 0; i<(website_data.listUseless).length; i++){
        let html = "<tr><td>"+website_data.listUseless[i]['username']+"</td><td><a href='//"+website_data.listUseless[i]['link']+"'>"+website_data.listUseless[i]['link']+"</a></td></tr>";
        document.querySelector('#useless').insertAdjacentHTML('beforeEnd', html);
      };

      for(let i = 0; i<(website_data.listUseful).length; i++){
        let html = "<tr><td>"+website_data.listUseful[i]['username']+"</td><td><a href='//"+website_data.listUseful[i]['link']+"'>"+website_data.listUseful[i]['link']+"</a></td></tr>";
        document.querySelector('#useful').insertAdjacentHTML('beforeEnd', html);
      };

      for(let i = 0; i<(website_data.listUser).length; i++){
        let html = "<tr><td>"+website_data.listUser[i]['username']+"</td><td><a href='//"+website_data.listUser[i]['link']+"'>"+website_data.listUser[i]['link']+"</a></td></tr>";
        document.querySelector('#user').insertAdjacentHTML('beforeEnd', html);
      };
    }
})
