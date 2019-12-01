<?php
    session_start();
    $result = "";
    $emote = 'smile';

    if(!isset($_SESSION['username'])){
    	$_SESSION['username'] = 'Guest';
    }

    if(isset($_POST['login'])) {
      include_once("../db.php");
      $username = strip_tags($_POST['username']);
      $password = strip_tags($_POST['password']);

      $username = stripslashes($username);
      $password = stripslashes($password);

      $username = mysqli_real_escape_string($db, $username);
      $password = mysqli_real_escape_string($db, $password);

      $password = md5($password);

      $sql = "SELECT * FROM users WHERE username='$username' LIMIT 1";
      $query = mysqli_query($db, $sql);
      $row = mysqli_fetch_array($query);
      $id = $row['id'];
      $db_password = $row['password'];

      if($password == $db_password) {
          $_SESSION['username'] = $username;
          $_SESSION['id'] = $id;
          header("Location: account.php");
      }
      else {
        $result = 'Wrong username or password!';
        $emote = 'rage';
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
	</head>

	<body>
		<!-- header скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/header.js"></script>

		<main>
			<img src="../images/<?php echo $emote; ?>.svg" id="image_status">
			<form action="login.php" method="post" id="login_form">
        <p style="height: 1em;"><?php echo $result; ?></p>
				<div style="height: 250px;">
          <input placeholder="Username" name="username" type="text" autofocus>
          <input placeholder="Password" name="password" type="password">
				</div>
				<button type="submit" name="login">Login</button>
				<a href="register.php">Register</a>
			</form>
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
		<script type="text/javascript">
			document.querySelector('#account-name').innerHTML = "<?php echo $_SESSION['username']; ?>";
		</script>
	</body>
</html>
