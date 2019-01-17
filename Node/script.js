import largeNumber from 'script2.js';

const a = largeNumber;
const b = 9;

console.log(a + b);

setTimeout(() => {
    console.log(__dirname); 
}, 5000);