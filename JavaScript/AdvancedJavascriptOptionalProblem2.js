/*Problem 2->
Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]
*/

function findSum(array, target){
	let resultArray = [];
	let found = false;
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if(array[i]+array[j] === target){
				resultArray.push(array[i]);
				resultArray.push(array[j]);
				found = true;
			}
		}
	}
	if(!found)
		return "NOT FOUND";
	
	return resultArray;
}