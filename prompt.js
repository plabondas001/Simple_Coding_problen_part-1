// const prompt = require('prompt-sync')();

// import { year } from "./inch_to_feet";

// let num = 20;
// let apps = prompt('enter a number')
// while(num != apps){
//     apps = prompt('try agin')
    
// }
// console.log(num);



function isLearYear(year){
    if(year % 4 === 0){
        console.log('Is a leap year: ', year);
        return true;
        
    }
    else{
        console.log('Not a leap year: ', year);
        return false;
    }
}

let output = isLearYear(2020);
console.log(output);




