<?php
  $url = explode('/', $_SERVER['REQUEST_URI']);

  if (strtolower($url[1]) == 'main'){
    require 'pages/main.php';
  }
  elseif (strtolower($url[1]) == 'randomizer') {
    require 'pages/randomizer.php';
  }
  elseif (preg_match('/^website_list/i', strtolower($url[1]))) {
    require 'pages/website_list.php';
  }
  elseif (strtolower($url[1]) == 'about') {
    require 'pages/about.php';
  }
  else {
    require 'pages/error.php';
  }
?>
