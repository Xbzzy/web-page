$(document).ready(function(){
    var score = 0;
    var index = 0;
    var errorNum = [];
    var wishes = "";
    var sign = "1";
    $('#begin').click(function(){
        url = "../demo5/demo5_form.html";
        window.location.href = url;
    });
    $('#end').click(function(){
        var checkedSign = checkSign();
        if (checkedSign == "111"){
            alert("sorry,you have no chance.");
            return;
        }
        sendSign();
        checkScore();
        if (score < 60){
            alert("sorry,your score is "+score+",lower than 60.");
            return;
        } else if (score >= 60 && score < 80){
            var sign = prompt("your score is "+score+",tell me one wish:");
            wishes = sign;
        } else if (score >= 80 && score != 100){
            var sign = prompt("your score is "+score+",tell me two wishes(separate with commas):");
            wishes = sign;
        } else if(score == 100){
            var sign = prompt("your score is "+score+",tell me two wishes and your question(separate with commas):");
            wishes = sign;
        }
        sendWish();
    });
    function sendSign(){
        $.ajax({
            type: "post",
            dataType: "json",
            cache: false,
            async: false,
            url: "saveWish.php",
            data: {
                sign: sign
            },
            success: function (data, textStatus) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }   
        });
    }
    function sendWish(){
        $.ajax({
            type: "post",
            dataType: "json",
            cache: false,
            async: false,
            url: "saveWish.php",
            data: {
                wish: wishes
            },
            success: function (data, textStatus) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }   
        });
    }
    function checkSign() {
        var user_data;
        $.ajax({
            type: "post",
            dataType: "json",
            cache: false,
            async: false,
            url: "readSign.php",
            data: {
            },
            success: function (data, textStatus) {
                user_data = data;
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }   
        });
        return user_data;
    }
    function checkScore(){
        if ($('#one').val()=="blue") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#two').val()=="thunder") {
            score += 5;
        } else {
            errorNum[index] = 2;
            index++;
        }
        if ($('#three').val()=="celery") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#four').val()=="mango") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#five').val()=="avocado") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#six').val()=="horticultural") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#seven').val()=="sightseeing") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#eight').val()=="huaxizi") {
            score += 5;
        } else {
            errorNum[index] = 1;
            index++;
        }
        var tmp9 = document.getElementsByName("nine");
        if (tmp9[0].checked == true){
            score += 8;
        }else{
            errorNum[index] = 1;
            index++;
        }
        var tmp10 = document.getElementsByName("nine");
        if (tmp10[0].checked == true){
            score += 8;
        }else{
            errorNum[index] = 1;
            index++;
        }
        var tmp11 = document.getElementsByName("nine");
        if (tmp11[0].checked == true){
            score += 8;
        }else{
            errorNum[index] = 1;
            index++;
        }
        var tmp12 = document.getElementsByName("nine");
        if (tmp12[0].checked == true){
            score += 8;
        }else{
            errorNum[index] = 1;
            index++;
        }
        var tmp13 = document.getElementsByName("nine");
        if (tmp13[0].checked == true){
            score += 8;
        }else{
            errorNum[index] = 1;
            index++;
        }
        if ($('#fourteen').val()=="computer science and technology") {
            score += 10;
        } else {
            errorNum[index] = 1;
            index++;
        }
        if ($('#fiveteen').val()=="bungee jumping") {
            score += 10;
        } else {
            errorNum[index] = 1;
            index++;
        }
    };
});