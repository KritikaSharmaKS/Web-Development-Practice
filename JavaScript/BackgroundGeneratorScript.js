
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColorButton"); 

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
};

body.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	var colour1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var colour2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = "linear-gradient(to right, " + colour1 + "," + colour2 + ")";

	css.textContent = body.style.background + ";";

	color1.value = colour1;
	color2.value = colour2;

});

