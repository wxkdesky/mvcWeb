var reg1 = new RegExp("([^;]+);", "ig");
var words = "hello;world;and;hello;to you;";
var j = 0;
var y = new Array();
var xx;// = reg.exec(words);
while ((xx = reg1.exec(words)) != null) {
    y[j] = xx[1];
    j = j + 1;
}
for (j = 0; j < y.length ; j++) {
    document.getElementById("test").innerHTML += y[j] + "<br />"
}
//var xx = words.match(reg);
//for (var i = 0; i < xx.length ; i++) {
// document.write("<p>"+xx[i] + "<br /></p>");
// document.getElementById("test").innerHTML+=xx[i]+"<br />"
//}