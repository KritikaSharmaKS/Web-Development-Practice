/*3+7


window.onload = function(){
	if(3+7 === 10){
		alert("Hello everyone");
	}
}

console.log("Helloooooooooooooooo");
*/




database = [ 
	{	username: "kangel",
		password: "ks"
	},
	{	username: "jack",
		password: "123"
	},
	{	username: "monica",
		password: "777"
	}
];

newsfeed = [
    {
		username:"ks",
		timeline:"I am so happy with JavaScript!"
	},
    {
		username:"rs",
		timeline:"I love my daughter!"
	},
    {
		username:"us",
		timeline:"I am so proud of my daughter!" 
	}
];

var usernamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

/*function isValid(username, password){
	for(var i=0; i<database.length; i++){
		if(username===database[i].username && password===database[i].password)
			return true;
	}
	return false;	
}*/

isValid(usernamePrompt, passwordPrompt);

var b = false;
function isValid(username, password){
	database.forEach(function(items){
		if(items.username===username && items.password===password){
			b = true;
			return;
		}	
	}
	)
	if(b)
		console.log(newsfeed);	
	else
		alert("Sorry. Wrong username and password");	
}

/*function validate(user, pass){
	console.log(isValid(user, pass));
	if (isValid(user, pass)) 
		console.log(newsfeed);
	else
		alert("Sorry. Wrong username and password");
}

validate(usernamePrompt, passwordPrompt);*/
