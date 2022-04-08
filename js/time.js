window.onload=function(){
    //每1秒刷新时间
    setInterval("NowTime()",1000);
}
function NowTime(){
    //获取年月日
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();

    //获取时分秒
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();

    //检查是否小于10
    h=check(h);
    m=check(m);
    s=check(s);
    //给标签的html赋值
    $("#DataTime").html(year+"年"+month+"月"+day+"日  "+h+":"+m+":"+s);
}
//时间数字小于10，则在之前加个“0”补位。
function check(i){
    //三元运算
    var num;
    i<10?num="0"+i:num=i;
    return num;
}