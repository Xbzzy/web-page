$(document).ready(function(){
    $('#blog').click(function(){
        jumpToBlog();
    });
    $('#demo1').click(function(){
        jumpToDemo1();
    });

    $('#demo2').click(function(){
        jumpToDemo2();
    });

    $('#demo3').click(function(){
        jumpToDemo3();
    });
    $('#demo4').click(function(){
        jumpToDemo4();
    });
    $('#birth').click(function(){
        printSecret();
    });

    $('#backToHome').click(function(){
        jumpToHome();
    });

   

    function jumpToBlog(){
        url = "blog/index.php";
        window.location.href = url;
    }
    function jumpToHome(){
        url = "index.html";
        window.location.href = url;
    }

    function jumpToDemo1(){
        url = "demo1.html";
        window.location.href = url;
    }

    function jumpToDemo2(){
        url = "demo2.html";
        window.location.href = url;
    }
    function jumpToDemo3(){
        url = "demo3.html";
        window.location.href = url;
    }
    function jumpToDemo4(){
        url = "demo4.html";
        window.location.href = url;
    }
    
    function printSecret(){
        var secret=[];
        var index=0;
        secret[0] = "小张喜欢糯糯的年糕"
        secret[1] = "小张喜欢草莓橘子"
        secret[2] = "小张喜欢草莓糯米冰糖葫芦"
        secret[3] = "小张想喝鲜芋仙"
        secret[4] = "小张喜欢黑芝麻肉松的青团"
        secret[5] = "小张喜欢草莓凤梨酥"
        secret[6] = "小张喜欢草莓泡芙"
        secret[7] = "小张不喜欢下雨天"
        secret[8] = "小张特别喜欢面包(新鲜出炉)"
        secret[9] = "小张想试试日料纳豆蛋包饭"
        secret[10] = "小张喜欢黄瓜青柠牛油果味乐事"
        secret[11] = "小张考试前紧张得很不愿意进食"
        secret[12] = "小张喜欢汤姆农场黄油蜂蜜山葵杏仁巴旦木"
        secret[13] = "小张以前喜欢收集电影票"
        secret[14] = "小张现在喜欢收集瑞幸被套"
        secret[15] = "小张喜欢醪糟汤圆"
        secret[16] = "小张粉底喜欢mac定制无暇"
        if($('#year').val()==2001&& $('#month').val()==02&&$('#day').val()==28) {
            index++;
            if(index>=4){
                alert("你已经重复获得了三个秘密了!秘密可不能贪多噢~")
                return
            }
            var site = Math.round(Math.random()*16);
            alert("生日验证成功,恭喜得到一个小秘密!那就是："+secret[site]);
        } else {
            alert("生日输入错误了噢,再试一遍吧！");
        }
    };
});