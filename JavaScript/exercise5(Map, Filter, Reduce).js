// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
]

//#1 Create an array using forEach that has all the usernames with a "!" to each of the usernames
let updatedArray = [];
const forArray = array.forEach(user=>{
      updatedArray.push(user.username+"!");
});


//#2 Create an array using map that has all the usernames with a "?" to each of the usernames
const mapArray = array.map(user=>user.username+"?");


//#3 Filter the array to only include users who are on team: red
const filterArray = array.filter(user=> user.team === "red");


//#4 Find out the total score of all users using reduce
const reduceArray = array.reduce((acc, num)=> {
  return acc+num.score;
}, 0);


// (1), what is the value of i? //index of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//Ans->(2) pure map function
const newArray = arrayNum.map((num, i) => {
  return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonusArray = array.map(user => {
  user.items = user.items.map(num => num + "!");
  return user;
});
console.log(bonusArray);