
function f() {
  for(var i = 0; i < 1000; i++)
  { 
    var node = document.createElement("P");
    var textnode = document.createTextNode("test test test");
    node.appendChild(textnode);
    var cc = document.createElement("BR");
    node.appendChild(cc);
    document.getElementById("forfor").appendChild(node);
  }
}

