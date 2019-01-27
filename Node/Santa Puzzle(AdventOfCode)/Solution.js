const fs = require("fs");

fs.readFile('input.txt', (err, data) => {
    console.time('funCode');
    if(err){
        console.log("errrroorrrrr!!!");
    }
    const charArray = data.toString().split("");
    // let floor=0;
    let count = 0;
    // for(ch of charArray){
    //     if(ch === '('){
    //         floor+=1
    //     }else{
    //         floor-=1
    //     }
    //     if(floor === -1){
    //         console.log("position is: "+count)
    //         break;
    //     }
    //     count++;
    // }

    // const answer = charArray.reduce((accumulator, currentValue) => {
    //     if(currentValue==='('){
    //         return accumulator+=1;
    //     }
    //     else{
    //         return accumulator-=1;
    //     }
    // }, 0);

    let accumulator = 0;
    const position = charArray.some((currentItem) => {
        if(currentItem==='('){
            accumulator+=1;
        }
        else{
            accumulator-=1;
        }
        count++;
        return accumulator<0;
    });

    console.log(count);

    // console.log("floor is: "+floor);
    console.timeEnd('funCode');
});