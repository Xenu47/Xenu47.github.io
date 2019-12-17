<?php
 $route = preg_split("[/]",key($_GET));
 $main = $route[0];
 if(function_exists($main)){
   $main();
 }
 else{
   require('pages/error.php');
 }

function main()
{
 require('pages/main.php');
}
function randomizer()
{
require('pages/randomizer.php');
}
function websitelist()
{
 require('pages/website_list.php');
}
function listuseless()
{
 header('Location:pages/website_list.php#useless');
}
function listuseful()
{
 header('Location:pages/website_list.php#useful');
}
function listuser()
{
 header('Location:pages/website_list.php#user');
}
function about()
{
  require('pages/about.php');
}
?>
