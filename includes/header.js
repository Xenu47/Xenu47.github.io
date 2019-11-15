// для инклюдов в каждую страницу, чтобы не повторять код по 20 раз
document.write(`
		<header>
			<!-- желтая часть. название и логин -->
			<div id="head">
				<a href="main.html" id="logo">UNEX</a>
				<div id="login_form">
					<form id="form">
						<input type="login" name="unexlogin" id="username" placeholder="Username" class="text_forms">
						<input type="password" name="unexpassword" id="password" placeholder="Password" class="text_forms">
					</form>
					<a onclick="auth()" id="loginb">LOGIN</a>
					<a href="#" id="registerb">REGISTER</a>
				</div>
			</div>


			<!-- черная часть, навигация по сайту -->
			<div id="nav_bar">
				<span></span>
				<a href="main.html">MAIN</a>
				<span>|</span>
				<a href="randomizer.html">RANDOMIZER</a>
				<span>|</span>
				<a onclick="mouseOver()">WEBSITE LIST</a>
				<span>|</span>
				<a href="about.html">ABOUT</a>
				<span></span>
			</div>

			<!-- выпадающий список -->
			<div id="list_menu" onclick="mouseOver()">
				<a href="website list.html#all">All</a>
				<a href="website list.html#useless">Useless</a>
				<a href="website list.html#useful">Useful</a>
				<a href="website list.html#user">User</a>
			</div>
		</header>

		<input type="range" min="0" max="100" value="100" id="brightness-control" oninput="changeBrightness()">
		<div id="night-mode"></div>
		<div id="night-mode-image"></div>

		<div id="content">
`)