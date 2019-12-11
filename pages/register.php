<?php
  session_start();

  if(isset($_SESSION['id'])) {
    header("Location: account.php");
  }
?>

<!DOCTYPE html5>
<html>
	<head>
		<title>UNEX</title>
		<!-- стили -->
		<link rel="stylesheet" type="text/css" href="../styles/style.css">
		<link rel="stylesheet" type="text/css" href="../styles/account.css">
		<!-- скрипты -->
		<!-- onload -->
		<script type="text/javascript" src="../scripts/onloads.js"></script>
		<!-- выпадающее меню -->
		<script type="text/javascript" src="../scripts/dropdown.js"></script>
		<!-- логин система -->
		<script type="text/javascript" src="../scripts/auth.js"></script>
		<!-- изменение яркости -->
		<script type="text/javascript" src="../scripts/brightness.js"></script>
		<script>
			function goRegister(){
				document.querySelector("#login_form").style.setProperty("display","none");
				document.querySelector("#register_form").style.setProperty("display","block");
			}
			function goLogin(){
				document.querySelector("#login_form").style.setProperty("display","block");
				document.querySelector("#register_form").style.setProperty("display","none");
			}
		</script>
	</head>

	<body>
		<!-- header скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/header.js"></script>

		<main>
			<img src="../images/smile.svg" id="image_status">
			<form method="post" name="register" id="register_form">
        <p style="height: 1.5em;">please be patient I have autism</p>
				<div style="height: 250px;">
          <input placeholder="Username" name="username" type="text" autocomplete="off" autofocus>
          <input placeholder="Password" name="password" type="password" autocomplete="off">
          <input placeholder="Confirm Password" name="password_confirm" type="password" autocomplete="off">
          <input placeholder="E-Mail Address" name="email" type="text" autocomplete="off">
				</div>
				<button type="submit">Register</button>
				<a href="login.php">Login</a>
			</form>
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
	</body>
</html>
