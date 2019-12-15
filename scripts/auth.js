function login(event) {
  event.preventDefault();
	var form = document.forms.login;
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open("POST","../scripts/login.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
			check = JSON.parse(check);
			if(check['error'] == ''){
				sessionStorage.username = check['username'];
				document.querySelector('#account-name').innerHTML = sessionStorage.username;
				let x = document.querySelectorAll('#form_area input');
				for (let i = 0; i < x.length; i++) {
					x[i].disabled = true;
				}
				document.querySelector('form > button').style.display = 'none';
				document.querySelector('form > a').style.display = 'none';
        document.querySelector('form > p').innerHTML = "You've already logged in";
			}
			document.querySelector('form > p').innerHTML = check['error'];
			document.querySelector('#image_status').setAttribute('src', '../images/'+check['emote']+'.svg');
  		if(document.querySelector('#add_website')){
        document.querySelector('#add_website').style.setProperty('display', 'block');
      }
		}
  }
  request.send(formData);
}

function register(event) {
	event.preventDefault();
	var form = document.forms.register;
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open("POST","../scripts/register.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
			check = JSON.parse(check);
			if(check['error'] == ''){
				sessionStorage.username = check['username'];
				document.querySelector('#account-name').innerHTML = sessionStorage.username;
				let x = document.querySelectorAll('#form_area input');
				for (let i = 0; i < x.length; i++) {
					x[i].disabled = true;
				}
				document.querySelector('form > button').style.display = 'none';
				document.querySelector('form > a').style.display = 'none';
        document.querySelector('form > p').innerHTML = "You've already logged in";
			}
			document.querySelector('form > p').innerHTML = check['error'];
			document.querySelector('#image_status').setAttribute('src', '../images/'+check['emote']+'.svg');
  		if(document.querySelector('#add_website')){
        document.querySelector('#add_website').style.setProperty('display', 'block');
      }
		}
  }
  request.send(formData);
}

function logout() {
  event.preventDefault();
  let request = new XMLHttpRequest();
  request.open("POST","../scripts/logout.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			sessionStorage.username = 'Guest';
			document.querySelector('#account-name').innerHTML = sessionStorage.username;
      document.querySelector('form > button').style.display = 'block';
      document.querySelector('form > a').style.display = 'block';
      document.querySelector('form > p').innerHTML = "please be patient I have autism";
      let x = document.querySelectorAll('#form_area input');
      for (let i = 0; i < x.length; i++) {
        x[i].disabled = false;
        x[i].value=null;
      }
  		if(document.querySelector('#add_website')){
        document.querySelector('#add_website').style.setProperty('display', 'none');
      }
		}
  }
  request.send();
}

function showLogin() {
  document.querySelector('#form_back').style.setProperty('display', 'block');
  document.querySelector('#form_area').style.setProperty('display', 'block');
  document.querySelector('#login_block').style.setProperty('display', 'flex');
  document.querySelector('#register_block').style.setProperty('display', 'none');
}

function showRegister() {
  document.querySelector('#form_back').style.setProperty('display', 'block');
  document.querySelector('#form_area').style.setProperty('display', 'block');
  document.querySelector('#login_block').style.setProperty('display', 'none');
  document.querySelector('#register_block').style.setProperty('display', 'flex');
}

function hideAll() {
  document.querySelector('#form_back').style.setProperty('display', 'none');
  document.querySelector('#form_area').style.setProperty('display', 'none');
  document.querySelector('#login_block').style.setProperty('display', 'none');
  document.querySelector('#register_block').style.setProperty('display', 'none');
}

function add_website(event) {
	event.preventDefault();
	var form = document.forms.add_website;
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open("POST","../scripts/add_website.php");
  request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
			let check = request.responseText;
      check = JSON.parse(check);
      console.log(check);
      let html = "<tr><td>"+check['username']+"</td><td><a href='//"+check['link']+"'>"+check['link']+"</a></td></tr>";
      document.querySelector('#user').insertAdjacentHTML('beforeEnd', html);
      document.querySelector('#clearme').value=null;
		}
  }
  request.send(formData);
}
