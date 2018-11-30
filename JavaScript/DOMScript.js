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
	buttonEle.onclick = deleteElement;
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(buttonEle);
	ul.appendChild(li);
	li.onclick = addToggle;
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


function addToggle() {
  		this.classList.toggle("done");
}

function deleteElement(){
		var parent = this.parentElement;
		ul.removeChild(parent);
}

for(var i=0; i<li.length; i++){
	li[i].onclick = addToggle.bind(li[i], i);
}

for (var i = 0; i <deleteButton.length; i++) {
	deleteButton[i].onclick = deleteElement.bind(deleteButton[i],i);
}

