$(document).ready(function(){
    var num = 0;
    var dataFood = [];
    $('#showMenu').click(function(){
        num++;
        dataFood = readFood();
        if (num>3){
            alert("别纠结啦！快选一个吧~");
            return;
        }
        alert("早饭："+dataFood[0]+" "+"午饭："+dataFood[1]+" "+"晚饭："+dataFood[2]+" ");
    })
    $('#addMenu').click(function(){
        var sign = prompt("只有小张本人才可加入新菜名,请输入暗号:")
        while(sign == ""){};
        if(sign == "zzyxpp"){
            $('#add_food').css({
                modal:true,
                width:"400",
                height:"135",

            });
            $('#add_food').css("background-color","rgb(95, 105, 191)");
            $('#add_food').css("border-style","solid");
            $('#add_food').css("display","block");
        }else{
            alert("暗号错误...");
            return;
        }
    })
    $("#save").click(function(){
        saveFood();
        alert("保存成功！");
    })
    $('#cancel').click(function(){
        $('add_food').css("display","none");
    })
    function saveFood(){
        $.ajax({
            type: "post",
            dataType: "json",
            cache: "false",
            async: "false",
            url: "saveData.php",
            data: {
                foodName: $('#food_name').val(),
                timeType: $('#time_type').val()
            },
            success: function(data, textStatus){ 
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
        return;
    }
    function readFood() {
        var user_data;
        $.ajax({
            type: "post",
            dataType: "json",
            cache: false,
            async: false,
            url: "readData.php",
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
})