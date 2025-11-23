// const prompt = require('prompt-sync')();


// let nm = 2025;
//  let res = prompt('enter a nm: ');
//  while(nm != res){
//     res = prompt('try agin')

//  }
//  console.log('right');





function isLearYear(year) {
    if (isNaN(year) || year.length === 0) {
        console.log('Wrong Input enter a number');

    }
    else if(year % 4 != 0){
        let out = prompt('try agin')
        while(year != out){
            
            
            console.log(`${year} dont match`);
        }
        
    }
    else if (year % 4 === 0) {
        console.log(`${year} is a leap year`);
        

    }
    


    // else{
    //     console.log(`${year} not a leap year`);

        

    // }



}

let promt = prompt('Enter the year: ')
isLearYear(promt);





