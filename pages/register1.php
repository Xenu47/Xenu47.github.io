<?php
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

  $sql_store = "INSERT into users (username, password, email) VALUES ('$username','$password','$email')";
  $sql_fetch_username = "SELECT username FROM users WHERE username = '$username'";
  $sql_fetch_email = "SELECT email FROM users WHERE email = '$email'";

  $query_username = mysqli_query($db, $sql_fetch_username);
  $query_email = mysqli_query($db, $sql_fetch_email);

  if ($username == "") {
    $error = 'Please enter username';
    $emote = 'rage';
  }
  elseif (strlen($username) > 16 || strlen($username) < 4) {
    $error = 'Username must be 4-16 symbols long!';
    $emote = 'rage';
  }
  elseif (mysqli_num_rows($query_username)) {
    $error = 'There is already user with that name!';
    $emote = 'rage';
  }
  elseif ($password == "" || $password_confirm == "") {
    $error = 'Please enter your password';
    $emote = 'rage';
  }
  elseif ($password != $password_confirm) {
    $error = 'The passwords do not match!';
    $emote = 'rage';
  }
  elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || $email == "") {
    $error = 'This email is not valid!';
    $emote = 'rage';
  }
  elseif (mysqli_num_rows($query_email)) {
    $error = 'This email is already in use!';
    $emote = 'rage';
  }

  else {
    session_start();
    mysqli_query($db, $sql_store);

    $sql = "SELECT * FROM users WHERE username='$username' LIMIT 1";
    $query = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($query);
    $id = $row['id'];
    $error = '';
    $emote = 'smile';

    $_SESSION['username'] = $username;
    $_SESSION['id'] = $id;
  }

  $array1 = array('username'=>$username,'error'=>$error,'emote'=>$emote);
  echo json_encode($array1);
?>
