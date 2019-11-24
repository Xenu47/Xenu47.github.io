// для инклюдов в каждую страницу, чтобы не повторять код по 20 раз
document.write(`
		<header>
			<!-- желтая часть. название и логин -->
			<div id="head">
				<a href="main.php" id="logo">UNEX</a>
				<a href="account.php" id="account">
					<img src="../images/door.png">
				</a>
			</div>


			<!-- черная часть, навигация по сайту -->
			<div id="nav_bar">
				<span></span>
				<a href="main.php">MAIN</a>
				<span>|</span>
				<a href="randomizer.php">RANDOMIZER</a>
				<span>|</span>
				<a onclick="mouseOver()">WEBSITE LIST</a>
				<span>|</span>
				<a href="about.php">ABOUT</a>
				<span></span>
			</div>

			<!-- выпадающий список -->
			<div id="list_menu" onclick="mouseOver()">
				<a href="website list.php#all">All</a>
				<a href="website list.php#useless">Useless</a>
				<a href="website list.php#useful">Useful</a>
				<a href="website list.php#user">User</a>
			</div>
		</header>

		<input type="range" min="0" max="100" value="100" id="brightness-control" oninput="changeBrightness()">
		<div id="night-mode"></div>
		<div id="night-mode-image"></div>

		<div id="content">
`)
