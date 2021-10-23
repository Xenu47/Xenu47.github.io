<?php
  
header('Content-type: text/vcard');//with header Content type 
echo file_get_contents("contact.vcf");
  
?>