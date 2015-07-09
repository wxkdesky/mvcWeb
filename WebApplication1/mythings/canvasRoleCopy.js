var drawImageCondition = 0;
var i = 30;
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
//var cxt2 = c2.getContext("2d");
//var cxt3 = c3.getContext("2d");
//cxt2.strokeStyle = "#00f";
//cxt3.strokeStyle = "#00f";
cxt.strokeStyle = "#00f";
cxt.fillStyle = "#FFFFFF";
//cxt2.fillStyle = "#FFFFFF";
//cxt3.fillStyle = "#FFFFFF";
//cxt.strokeRect(0, 0, c.width, c.height);
//cxt2.strokeRect(0, 0, c2.width, c2.height);
//cxt3.strokeRect(0, 0, c3.width, c3.height);
var img = new Image();
img.src = "/Images/3.jpg";
//var img2 = new Image();
//img2.src = "/Images/3.jpg";
//var img3 = new Image();
//img3.src = "/Images/3.jpg";
//cxt.drawImage(img, 0, 0, c.width, c.height);
var MyInterval = null;
function haha(x, y) {
    //i = i + 5;
    if (y == true) {
        drawPoint(x);
    }
    else {
        rePaint();
        cxt.strokeRect(0, 0, c.width, c.height);
    }
}
//刷新画布
function rePaint() {
    var allTags = document.getElementsByName("Tag");
    cxt.drawImage(img, 0, 0, c.width, c.height);
    for (n = 0; n < allTags.length; n++) {
        if (allTags[n].checked == true)
            drawPoint(n + 1);
    }
}
//根据标签来画点
function drawPoint(x) {
    if (x == 1) {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#FFFFFF";
        //cxt.strokeRect(0, 0, c.width, c.height);
        cxt.beginPath();
        cxt.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == 2) {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#FFA500";
        //cxt.strokeRect(0, 0, c.width, c.height);
        cxt.beginPath();
        cxt.arc(i + 8, i + 15, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
    else if (x == 3) {
        //cxt.drawImage(img, 0, 0, c.width, c.height);
        //cxt.strokeStyle = "#00f";
        cxt.fillStyle = "#FF00FF";
        //cxt.strokeRect(0, 0, c3.width, c3.height);
        cxt.beginPath();
        cxt.arc(i + 20, i + 30, 5, 0, Math.PI * 2, false);
        cxt.fill();
        cxt.closePath();
    }
}

