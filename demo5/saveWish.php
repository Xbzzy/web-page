<?php
    $sign = $_POST["sign"];
    $file1="../data/sign.txt";
    $tmp2 = file_put_contents($file1,$sign,FILE_APPEND | LOCK_EX);
    if ($tmp2 == false){
        echo("打开文件失败...");
    }
    $wish = $_POST["wish"];
    $file2="../data/wishes.txt";
    $tmp2 = file_put_contents($file2,$wish,FILE_APPEND | LOCK_EX);
    if ($tmp2 == false){
        echo("打开文件失败...");
    }
?>