<?php 
    $time = $_POST["timeType"];
    $food_name = $_POST["foodName"];
    if ($time == "breakfast"){
        $file="./data/breakfast.txt";
    } else if ($time == "lunch"){
        $file="./data/lunch.txt";
    } else {
        $file="./data/dinner.txt";
    }
    $sign = file_put_contents($file,$food_name."/",FILE_APPEND | LOCK_EX);
    if ($sign == false){
        echo("打开文件失败...");
    }
?>