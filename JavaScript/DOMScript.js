var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul = document.querySelector("ul");
var delete = document.getElementByClass("delete"); 

function checkInputLength(){
	return input.value.length;
}

function createElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
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

function togglefun(){
	event.target.classList.toggle("done");
}

function deleteElement(){
	ul.getElementsByTagName('')
}

ul.addEventListener("click",togglefun);

button.addEventListener("click", addElementAfterButtonClick);

input.addEventListener("keypress", addElementAfterKeyPressed);

delete.addEventListener("click", );


