<?php
    $breakfast = file_get_contents("./data/breakfast.txt");
    $lunch = file_get_contents("./data/lunch.txt");
    $dinner = file_get_contents("./data/dinner.txt");
    $breakfastArray = "";
    $lunchArray = "";
    $dinnerArray = "";
    $breakfastArray = explode("/",$breakfast);
    $lunchArray = explode("/",$lunch);
    $dinnerArray = explode("/",$dinner);
    $id1 = rand(0,count($breakfastArray)-2);
    $id2 = rand(0,count($lunchArray)-2);
    $id3 = rand(0,count($dinnerArray)-2);
    $data = array(
        $breakfastArray[$id1],
        $lunchArray[$id2],
        $dinnerArray[$id3]
    );
    echo json_encode($data);
?>