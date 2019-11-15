function auth() {
	var username = document.getElementById("username").value; // если имя пользователя admin
	var password = document.getElementById("password").value; // если пароль admin
	if ( username == "admin" && password == "admin"){ // вход выполнен
		window.alert ("Login successfully");
	}
	else{
		window.alert ("Wrong username or password"); // если нет - нет
	}
}