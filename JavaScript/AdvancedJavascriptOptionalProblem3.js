/*Problem 3->
Write a function that converts HEX to RGB. Then Make that function auto-detect the formats 
so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
*/

function convertColor(colorInAnyFormat){
	if(colorInAnyFormat.constructor === Array){
		//RGB TO HEX
		let hexString = "";
		for(item in colorInAnyFormat){
			hexString += convertToHex(colorInAnyFormat[item]); 
		}
		return hexString;
	}
	else{
		//HEX TO RGB
		let RGB = [];
		let rNumber = parseInt(colorInAnyFormat.substr(0,2), 16);
		let gNumber = parseInt(colorInAnyFormat.substr(2,2), 16);
		let bNumber = parseInt(colorInAnyFormat.substr(4,2), 16);
		RGB.push(rNumber);
		RGB.push(gNumber);
		RGB.push(bNumber);
		return RGB;
	}
	return "Invalid Input";
}

function convertToHex(numberRGB){
	let hexString = numberRGB.toString(16);
	if (hexString.length % 2) {
  		hexString = '0' + hexString;
	}
	return hexString;
}