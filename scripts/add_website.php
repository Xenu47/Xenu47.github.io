<?php
  $link = $_POST['link'];
  session_start();
  $username = $_SESSION['username'];
  $data_websites = json_decode(file_get_contents("../data/website_list.json"),true);
  $data_websites['listUser'][] = (array("username"=>$username,"link"=>$link));
  $json = json_encode($data_websites);
  file_put_contents('../data/website_list.json', $json);
  echo json_encode(array("username"=>$username,"link"=>$link));
?>
