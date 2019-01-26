const fs = require("fs");

fs.readFile('input.txt', (err, data) => {
    console.time('funCode');
    if(err){
        console.log("errrroorrrrr!!!");
    }
    const charArray = data.toString().split("");
    let floor=0;
    for(ch of charArray){
        if(ch === '('){
            floor+=1
        }else{
            floor-=1
        }
    }
    console.log("floor is: "+floor);
    console.timeEnd('funCode');
});