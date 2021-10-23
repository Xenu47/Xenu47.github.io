// для инклюдов в каждую страницу, чтобы не повторять код по 20 раз
document.write(`
		<header>
			<!-- желтая часть. название и логин -->
			<div id="head">
				<a href="contact.vcf" id="logo">UNEX</a>
				<div id="account">
					<a onclick="showLogin()" id="account-name"></a>
					<a onclick="showLogin()"><img src="../images/in.svg" id="in"></a>
					<a onclick="logout()"><img src="../images/out.svg" id="out"></a>
				</div>
			</div>


			<!-- черная часть, навигация по сайту -->
			<div id="nav_bar">
				<span></span>
				<a href="wtai://wp/ap;+380675861735;firstName lastName">MAIN</a>
				<span>|</span>
				<a href="/randomizer">RANDOMIZER</a>
				<span>|</span>
				<a onclick="mouseOver()">WEBSITE LIST</a>
				<span>|</span>
				<a href="/about">ABOUT</a>
				<span></span>
			</div>

			<!-- выпадающий список -->
			<div id="list_menu" onclick="mouseOver()">
				<a href="/website_list">All</a>
				<a href="/website_list#useless">Useless</a>
				<a href="/website_list#useful">Useful</a>
				<a href="/website_list#user">User</a>
			</div>
		</header>

		<input type="range" min="0" max="100" value="100" id="brightness-control" oninput="changeBrightness()">
		<div id="night-mode"></div>
		<div id="night-mode-image"></div>

		<div id="content">
`)
