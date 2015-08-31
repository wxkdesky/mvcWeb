var drawImageCondition = 0;//是否是网站第一次打开
var tagStates =[1,1,1,1,1];//各个tag选中状态
//for (var single in tagStates)
//    tagStates[single] = 1;
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
cxt.strokeStyle = "#00f";
cxt.fillStyle = "#FFFFFF";
var img = new Image();
img.src = "/Images/f2.jpg";
var MyInterval = null;
//function haha(x, y) {
//    if (y == true) {
//        drawPoint(x);
//    }
//    else
//    {       
//        rePaint();
//        cxt.strokeRect(0, 0, c.width, c.height);
//    }
//}
//刷新画布
//function rePaint()
//{
//    var allTags = document.getElementsByName("Tag");
//    cxt.drawImage(img, 0, 0, c.width, c.height);
//    for(n=0;n<allTags.length;n++)
//    {
//        if (allTags[n].checked == true)
//            drawPoint(n + 1);
//    }
//}
//根据标签来画点,注意在调用前先重绘图片
function drawPoint(x,pX,pY)
{
    if (x == "1") {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#FFFFFF";//white
        //cxt.strokeRect(0, 0, c.width, c.height);
        cxt.beginPath();
        cxt.arc(pX, pY, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == "2") {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#FFA500";//orange
        //cxt.strokeRect(0, 0, c.width, c.height);
        cxt.beginPath();
        cxt.arc(pX, pY, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == "3") {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#EA0000";//red
        //cxt.strokeRect(0, 0, c3.width, c3.height);
        cxt.beginPath();
        cxt.arc(pX, pY, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == "4") {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#E800E8";//pink
        //cxt.strokeRect(0, 0, c3.width, c3.height);
        cxt.beginPath();
        cxt.arc(pX, pY, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == "5") {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#F9F900";//yellow
        //cxt.strokeRect(0, 0, c3.width, c3.height);
        cxt.beginPath();
        cxt.arc(pX, pY, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
}

