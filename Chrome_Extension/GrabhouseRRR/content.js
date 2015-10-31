
function callJavascriptFunction(){
	alert("this is call")
}

alert("hello");
var continueExecution = function(){
var cusid_ele = document.getElementsByClassName('action-block');
 //alert(cusid_ele.length)
for (var i = 0; i < cusid_ele.length; ++i) {
      var item = cusid_ele[i];  
		var button = document.createElement("button");
		button.onclick = callJavascriptFunction;
    var text = document.createTextNode("select for route planner");
    button.appendChild(text);
    item.appendChild(button);
}
};
setTimeout(continueExecution, 10000)

