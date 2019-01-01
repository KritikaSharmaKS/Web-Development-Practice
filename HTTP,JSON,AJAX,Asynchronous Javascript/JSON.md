These are two ways to transfer data between two machines that did not speak the same languages.

JSON 
	We can only send text data to the servers, so we need a standard way to send data and receive it over wires.
	JavaScript Object Notation: is a syntax for storing and exchanging data- there is also XML for this
	JSON is text written with JavaScript Object Notation
	The trend is more towards JSON as write front end code is JS so easily communicate with JSON
	It is a succinct way to send data and reduces response time uses less bandwidth.
vs 
XML 
	Uses HTML like syntax
	It is outdated now
	Not very efficient 

Use JSON ->
1)	var obj = JSON.parse(‘{“name”: “John”, “age”:30, “city”:”NY”}’); //wrap JSON code into parse       method and it will give you a javascript object

2)	var myJSON = JSON.stringify(obj); //changes javascript object(obj) into JSON now it can be				    passed over network using http request or server can use myJSON to send a response.



