const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 116;

console.log(a + b);

setTimeout(() => {
    console.log(__dirname); 
}, 5000);