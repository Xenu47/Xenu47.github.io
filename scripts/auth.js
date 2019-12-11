window.onload = function(){
		if(!sessionStorage.username){
			sessionStorage.username = 'Guest';
		}
		document.querySelector('#account-name').innerHTML = sessionStorage.username;
		if(document.querySelector('#login_form')){document.querySelector('#login_form').addEventListener('submit',login);}
		if(document.querySelector('#register_form')){document.querySelector('#register_form').addEventListener('submit',register);}
}


function login(event) {
  event.preventDefault();
	var form = document.forms.login;
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open("POST","login1.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
			check = JSON.parse(check);
			if(check['error'] == ''){
				sessionStorage.username = check['username'];
				document.querySelector('#account-name').innerHTML = sessionStorage.username;
				let x = document.querySelectorAll('form input');
				for (let i = 0; i < x.length; i++) {
					x[i].disabled = true;
				}
				document.querySelector('form > button').style.display = 'none';
				document.querySelector('form > a').style.display = 'none';
			}
			document.querySelector('form > p').innerHTML = check['error'];
			document.querySelector('#image_status').setAttribute('src', '../images/'+check['emote']+'.svg');
		}
  }
  request.send(formData);
}

function register(event) {
	event.preventDefault();
	var form = document.forms.register;
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open("POST","register1.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
			check = JSON.parse(check);
			if(check['error'] == ''){
				sessionStorage.username = check['username'];
				document.querySelector('#account-name').innerHTML = sessionStorage.username;
				let x = document.querySelectorAll('form input');
				for (let i = 0; i < x.length; i++) {
					x[i].disabled = true;
				}
				document.querySelector('form > button').style.display = 'none';
				document.querySelector('form > a').style.display = 'none';
			}
			document.querySelector('form > p').innerHTML = check['error'];
			document.querySelector('#image_status').setAttribute('src', '../images/'+check['emote']+'.svg');
		}
  }
  request.send(formData);
}

function logout() {
  event.preventDefault();
  let request = new XMLHttpRequest();
  request.open("POST","logout.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			sessionStorage.username = 'Guest';
			document.querySelector('#account-name').innerHTML = sessionStorage.username;
		}
  }
  request.send();
}
