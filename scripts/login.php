<?php
    include_once("../data/db.php");
    $username = strip_tags($_POST['username']);
    $password = strip_tags($_POST['password']);

    $username = stripslashes($username);
    $password = stripslashes($password);

    $username = mysqli_real_escape_string($db, $username);
    $password = mysqli_real_escape_string($db, $password);

    $sql = "SELECT * FROM users WHERE username='$username' LIMIT 1";
    $query = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($query);
    $id = $row['id'];
    $db_username = $row['username'];
    $db_password = $row['password'];

    if($username == $db_username && password_verify($password, $db_password)) {
        session_start();
        $_SESSION['username'] = $username;
        $_SESSION['id'] = $id;
        $error = '';
        $emote = 'smile';
    }
    else {
        $error = 'Wrong password or username!';
        $emote = 'rage';
    }
    $array1 = array('username'=>$username,'error'=>$error,'emote'=>$emote);
    echo json_encode($array1);
?>
