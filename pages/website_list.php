<!DOCTYPE html5>
<html>
	<head>
		<title>UNEX</title>
	  <link rel="icon" href="../favicon.ico" type="image/gif" sizes="16x16">
		<!-- стили -->
		<link rel="stylesheet" type="text/css" href="../styles/style.css">
		<!-- скрипты -->
		<!-- onload -->
		<script type="text/javascript" src="../scripts/onloads.js"></script>
		<!-- выпадающее меню -->
		<script type="text/javascript" src="../scripts/dropdown.js"></script>
		<!-- логин система -->
		<script type="text/javascript" src="../scripts/auth.js"></script>
		<!-- изменение яркости -->
		<script type="text/javascript" src="../scripts/brightness.js"></script>
	</head>

	<body>
		<!-- header скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/header.js"></script>
		<script type="text/javascript">
			document.querySelector("a[onclick='mouseOver()']").setAttribute("class", "current");
		</script>

		<!-- мейн с контентом из ссылок на сайты генератора -->
		<main>
			<script src="../includes/account.js"></script>
			<center>
				<img src="../images/ayaya.webp" class="responsive-image"><br>
				<p>Hello!<br> You've visited the page with list of all websites, randomizer has!<br>Try to add some your own websites and hop back to <a href="/randomizer">Randomizer</a></p>
			</center>
			<center id="all">

				<!-- помойка --></br>
	      <table id="useless" style="width: 600px;">
				     <tr><th>Useless websites:</th></tr>
	     			 <tr><th>username</th><th>link</th></tr>
	      </table>
				<!-- полезное --></br>
	      <table id="useful" style="width: 600px;">
				     <tr><th>Useful websites:</th></tr>
	     			 <tr><th>username</th><th>link</th></tr>
	      </table>
				<!-- пользовательские --></br>
	      <table id="user" style="width: 600px;">
				     <tr><th>User websites:</th></tr>
	     			 <tr><th>username</th><th>link</th></tr>
	      </table>
	      <form method="post" name="add_website" id="add_website" style="display:none;">
	          <hr>
	          <p>Want to add new website?</p>
	          <input placeholder="Paste your link here" name="link" type="text" autocomplete="off" id="clearme">
	  				<button type="submit">Send</button>
	      </form>
			</center>
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
	</body>
</html>
