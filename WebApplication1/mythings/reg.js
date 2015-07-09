function resolve(words,finalData)
{
    var reg1 = new RegExp("([^n]+)n", "ig");
    //var words = "hello;world;and;hello;to you;";
    var j = 0;
    var y=new Array();
    var xx;// = reg.exec(words);
    while ((xx = reg1.exec(words)) != null) {
        y[j] = xx[1];
        j = j + 1;
    }
    var yy = new Array();
    var reg2 = new RegExp("([^;]+);", "ig");
    for (var j = 0; j < y.length; j++)
    {
        while((xx=reg2.exec(y[j]))!=null)
        {
            yy.push(xx[1]);
        }
        finalData.push(yy);
        yy = new Array();
    }
    
}
