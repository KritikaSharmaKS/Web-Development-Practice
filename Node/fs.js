const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if(err){
        console.log("errrrooooooorrrrrr!!!");
    }
    console.log('Async',data.toString());
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//Append
fs.appendFile('./hello.txt', ' You are a web developer now:)' , err => {
    if(err){
        console.log(err)
    }
});


//Write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if(err){
        console.log(err)
    }
});

//Delete
fs.unlink('bye.txt', err => {
    if(err){
        console.log(err)
    }
    console.log("It's Deleted");
});

