<?php
  $result = "";
  $emote = 'smile';
  $content = file_get_contents('register.php');
  if(isset($_SESSION['id'])) {
    header("Location: index.php");
  }

  if(isset($_POST['register'])) {
    include_once("../db.php");
    $username = strip_tags($_POST['username']);
    $password = strip_tags($_POST['password']);
    $password_confirm = strip_tags($_POST['password_confirm']);
    $email = strip_tags($_POST['email']);

    $username = stripslashes($username);
    $password = stripslashes($password);
    $password_confirm = stripslashes($password_confirm);
    $email = stripslashes($email);

    $username = mysqli_real_escape_string($db, $username);
    $password = mysqli_real_escape_string($db, $password);
    $password_confirm = mysqli_real_escape_string($db, $password_confirm);
    $email = mysqli_real_escape_string($db, $email);

    $password = md5($password);
    $password_confirm = md5($password_confirm);

    $sql_store = "INSERT into users (username, password, email) VALUES ('$username','$password','$email')";
    $sql_fetch_username = "SELECT username FROM users WHERE username = '$username'";
    $sql_fetch_email = "SELECT email FROM users WHERE email = '$email'";

    $query_username = mysqli_query($db, $sql_fetch_username);
    $query_email = mysqli_query($db, $sql_fetch_email);

    if ($username == "") {
      $result = 'Please enter username';
      $emote = 'rage';
    }
    elseif (mysqli_num_rows($query_username)) {
      $result = 'There is already user with that name!';
      $emote = 'rage';
    }
    elseif ($password == "" || $password_confirm == "") {
      $result = 'Please enter your password';
      $emote = 'rage';
    }
    elseif ($password != $password_confirm) {
      $result = 'The passwords do not match!';
      $emote = 'rage';
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || $email == "") {
      $result = 'This email is not valid!';
      $emote = 'rage';
    }
    elseif (mysqli_num_rows($query_email)) {
      $result = 'This email is already in use!';
      $emote = 'rage';
    }
    else {
      mysqli_query($db, $sql_store);

      header("Location: account.php");
    }
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
		<script type="text/javascript" src="../scripts/login.js"></script>
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
			<img src="../images/<?php echo $emote; ?>.svg" id="image_status">
			<form action="register.php" method="post" id="register_form">
        <p style="height: 1em;"><?php echo $result; ?></p>
				<div style="height: 250px;">
          <input placeholder="Username" name="username" type="text" autofocus>
          <input placeholder="Password" name="password" type="password">
          <input placeholder="Confirm Password" name="password_confirm" type="password">
          <input placeholder="E-Mail Address" name="email" type="text">
				</div>
				<button type="submit" name="register">Register</button>
				<a href="login.php">Login</a>
			</form>
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
	</body>
</html>
