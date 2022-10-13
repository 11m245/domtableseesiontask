
function createheads(tagname,content,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
   return ele;
}

function createTag(tagname){
    var ele=document.createElement(tagname);     
    return ele;
    
}

function createdata(tagname,content){
    var ele=document.createElement(tagname);
        ele.innerHTML=content;
   return ele;
}

var e1 = document.createElement("table");
e1.setAttribute("class","table");


var h1 = document.createElement("thead");
h1.setAttribute("class","thead-dark");

var col1=createheads("th","First","scope","col");
var col2=createheads("th","Middle","scope","col");
var col3=createheads("th","Last","scope","col");

var r1=createTag("tr");

r1.append(col1,col2,col3);

h1.append(r1);

var col11=createdata("td","Mark");
var col12=createdata("td","Otto");
var col13=createdata("td","@mdo");

var r2=createTag("tr");

r2.append(col11,col12,col13);


var tb=createTag("tbody");

tb.append(r2);

e1.append(h1,tb);

document.body.append(e1);