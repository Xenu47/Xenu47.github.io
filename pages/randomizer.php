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
		<link rel="stylesheet" type="text/css" href="../styles/randomizer.css">
		<!-- скрипты -->
		<!-- onload -->
		<script type="text/javascript" src="../scripts/onloads.js"></script>
		<!-- выпадающее меню -->
		<script type="text/javascript" src="../scripts/dropdown.js"></script>
		<!-- логин система -->
		<script type="text/javascript" src="../scripts/login.js"></script>
		<!-- система рандомайзера -->
		<script type="text/javascript" src="../scripts/randomizer.js"></script>
		<!-- изменение яркости -->
		<script type="text/javascript" src="../scripts/brightness.js"></script>
	</head>

	<body>
		<!-- header скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/header.js"></script>
		<script type="text/javascript">
			document.querySelector("a[href='randomizer.php']").setAttribute("id", "current");
		</script>

 		<main>
 			<!-- блок рандомайзера -->
			<div id="randomizer">
				<div id="randomizer_base">
					<p id="randomizer-1"> ROSES ARE RED </p>
					<p id="randomizer-2"> MEMES ARE NEAT </p>
					<p id="randomizer-3"> I WANT TO DIE </p>
					<!-- кнопка вызывает открытие случайной страницы и звук -->
					<p><button id="randomizer_button" onclick="getRandomPage()" onmousedown="PlaySound('press');" onmouseup="PlaySound('release')">LMAO YEET</button></p>
				</div>

				<div id="randomizer_choose">
					<datalist id="tickmarks">
						<option>ALL</option>
						<option>USELESS</option>
						<option>USEFUL</option>
						<option>USER</option>
					</datalist>
					<input type="range" min="0" max="99" value="0" id="randomizer_range" list="tickmarks" oninput="changeList(value, 0)">
				</div>

				<!-- нинзя пустой пока пользователь не прошелся по всем сайтам -->
				<p id="ninja"></p>
			</div>
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
		<script type="text/javascript">
			document.querySelector('#account-name').innerHTML = "<?php echo $_SESSION['username']; ?>";
		</script>
	</body>
</html>
