<?php
// Code for file download, replace with your own logic
$file = "kill.mkv";
header("Content-Type: application/octet-stream");
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"" . basename($file) . "\"");
readfile($file);
?>
