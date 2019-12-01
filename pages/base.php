<?php
    session_start();

    if(!isset($_SESSION['username'])){
    	$_SESSION['username'] = 'Guest';
    }
?>

<!DOCTYPE html5>
<html>
	<head>
		<title>UNEX</title>
		<!-- стили -->
		<link rel="stylesheet" type="text/css" href="../styles/style.css">
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
		<script type="text/javascript">
			document.querySelector("a[]").setAttribute("id", "current");
		</script>

		<main>
			<!-- CONTENT -->
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
		<script type="text/javascript">
			document.querySelector('#account-name').innerHTML = "<?php echo $_SESSION['username']; ?>";
		</script>
	</body>
</html>
