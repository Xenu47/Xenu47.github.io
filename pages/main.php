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
			document.querySelector("div#nav_bar a[href='main.php']").setAttribute("id", "current");
		</script>

		<main>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nunc vel felis rutrum, eu blandit purus pharetra. Nunc eget nisl vitae nisl facilisis mollis non vitae nunc. In at est quis eros semper maximus. Aliquam non nunc vel ligula bibendum accumsan sit amet eget lacus. Maecenas augue arcu, cursus nec aliquet eget, gravida sed nisl. Proin sit amet porttitor purus. Nam in vestibulum neque, ac pharetra nisl. Etiam sollicitudin odio id neque lacinia imperdiet. Maecenas viverra est eu maximus lacinia.<br><br>

			Suspendisse non enim urna. Aenean faucibus a justo vitae hendrerit. Nullam aliquet mollis sodales. Nullam eu quam sed arcu ullamcorper rhoncus a eu tellus. Morbi sed ex eget nisi feugiat aliquet. Mauris quis consectetur ex. Nam lacinia pellentesque augue, vitae rhoncus sem facilisis convallis. Aenean faucibus pharetra venenatis. Aliquam erat volutpat. Quisque mollis mi non lectus laoreet bibendum. Fusce porttitor vulputate rhoncus. Proin dapibus blandit arcu, malesuada accumsan lectus placerat vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non ullamcorper felis.<br><br>

			Vestibulum condimentum massa interdum metus iaculis volutpat. Fusce cursus venenatis eros, a semper nunc. Sed quis ipsum pretium, porta tortor eget, tempus lectus. Morbi vehicula nibh vel augue finibus porta. Maecenas lacinia sagittis odio, ac elementum sapien tempor sed. Sed pulvinar interdum mauris. Nam nec dapibus nisl. Suspendisse ac turpis vel neque tincidunt ultricies. Praesent eu vulputate ligula, et porttitor nibh. Praesent quis sollicitudin augue. Cras sed erat velit. Donec luctus, velit id lacinia pretium, ex nulla facilisis lectus, nec aliquam turpis justo nec dui. Integer porttitor iaculis leo quis commodo. Curabitur aliquam rutrum tortor, eget euismod ex condimentum nec. Nullam ullamcorper mi eu convallis tincidunt.<br><br>

			Nulla elit erat, volutpat dignissim auctor vel, dignissim quis ante. Vivamus luctus sagittis aliquet. Cras facilisis dui scelerisque elit venenatis malesuada in eget sem. Vestibulum ultricies risus vel lacus ornare consequat. Curabitur ut ipsum sit amet mauris porttitor euismod. Proin scelerisque mauris at dictum bibendum. In sollicitudin nibh purus, sed sagittis nulla maximus condimentum. Donec iaculis dui lectus, ac elementum est aliquet et. Sed luctus lorem sit amet dapibus pellentesque. Vestibulum sit amet ullamcorper mi. Vivamus convallis sed velit vitae elementum. Fusce quis pellentesque nisi. Ut elementum faucibus sem vel feugiat. Duis eget mattis nunc. Aenean vulputate sem ac est gravida, et fringilla nisi ullamcorper. Suspendisse aliquam congue ligula sed bibendum.<br><br>

			Nam volutpat mauris non pretium convallis. In vitae porta tellus. Sed semper felis nec velit malesuada pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisl ut risus vulputate dignissim sollicitudin eget dolor. Aenean luctus, purus vitae congue pellentesque, ex massa aliquam turpis, dignissim eleifend nibh orci eget dui. Sed a lacinia risus, id dapibus eros. Cras id pellentesque metus, in tincidunt urna. Sed sit amet purus fermentum, dignissim est ac, pharetra metus. Quisque a imperdiet elit. Sed porttitor dictum mauris, faucibus lobortis augue. Ut pellentesque non mi eu feugiat. Mauris pretium elit eget lectus dapibus rutrum. Nullam aliquet aliquam erat, vel porta lacus consequat et. Nulla id nulla pellentesque, pretium quam ac, tempor lorem. Donec non imperdiet dui.
		</main>

		<!-- footer скриптом, чтобы не повторять в каждом файле -->
		<script src="../includes/footer.js"></script>
		<script type="text/javascript">
			document.querySelector('#account-name').innerHTML = "<?php echo $_SESSION['username']; ?>";
		</script>
	</body>
</html>
