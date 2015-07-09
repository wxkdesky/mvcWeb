var t = document.getElementsByName("Tag");
var tagFirstClick = 0;//是否是第一次点击tag标签
function doAction1() {
    var se = 0;
    tagFirstClick = tagFirstClick + 1;
    if (tagFirstClick == 1)
    {
        for(var single=0;single<tagStates.length;single++)
        {
            tagStates[single] = 0;
        }
    }
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        //haha(se+1, true);
        tagStates[se] = 1;
    }
    else{
        // alert("你没有选择标签tag" + (i + 1));
        //haha(se+1, false);
        tagStates[se] = 0;
    }
}
//--------------------------------
function doAction2() {
    var se = 1;
    tagFirstClick = tagFirstClick + 1;
    if (tagFirstClick == 1) {
        for (var single = 0; single < tagStates.length; single++) {
            tagStates[single] = 0;
        }
    }
    if (t[se].checked == true) {
        tagStates[se] = 1;
    }
    else{
        tagStates[se] = 0;
    }
}
//--------------------------------------
function doAction3() {
    var se = 2;
    tagFirstClick = tagFirstClick + 1;
    if (tagFirstClick == 1) {
        for (var single = 0; single < tagStates.length; single++) {
            tagStates[single] = 0;
        }
    }
    if (t[se].checked == true) {
        tagStates[se] = 1;
    }
    else{
        tagStates[se] = 0;
    }
}
//---------------------------------------------
function doAction4() {
    var se = 3;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//--------------------------------------
function doAction5() {
    var se = 4;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
//--------------------------------------
function doAction6() {
    var se = 5;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
function doAction7() {
    var se = 6;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
function doAction8() {
    var se = 7;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
function doAction9() {
    var se = 8;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
function doAction10() {
    var se = 9;
    if (t[se].checked == true) {
        // alert("你选择的标签是tag" + (i + 1));
        haha(se + 1, true);
    }
    else {
        // alert("你没有选择标签tag" + (i + 1));
        haha(se + 1, false);
    }
}
//---------------------------------------------
