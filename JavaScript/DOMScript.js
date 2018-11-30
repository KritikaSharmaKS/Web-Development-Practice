var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

function checkInputLength(){
	return input.value.length;
}

function createElement(){
	var li = document.createElement("li");
	var buttonEle = document.createElement("button");
	buttonEle.appendChild(document.createTextNode("Delete"));
	buttonEle.classList.add("delete");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(buttonEle);
	ul.appendChild(li);
	input.value="";
}

function addElementAfterButtonClick(){
	if (checkInputLength()>0){
		createElement();
	}
}

function addElementAfterKeyPressed(e){
	if (checkInputLength()>0 && e.which === 13){
		createElement();
	}
}

button.addEventListener("click", addElementAfterButtonClick);

input.addEventListener("keypress", addElementAfterKeyPressed);

for(var i=0; i<li.length; i++){
	li[i].onclick = function() {
  		this.classList.toggle("done");
	}.bind(li[i], i);
}

for (var i = 0; i <deleteButton.length; i++) {
	deleteButton[i].onclick = function(){
		var parent = this.parentElement;
		ul.removeChild(parent);
	}.bind(deleteButton[i],i);
}

