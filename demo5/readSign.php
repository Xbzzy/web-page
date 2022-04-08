<?php
$data = file_get_contents("../data/sign.txt");
echo json_encode($data);
?>