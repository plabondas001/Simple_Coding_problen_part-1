// inch to feet 


function inchToFeet(inch){
    let feet = inch * 0.0833333;
    return feet;
}


let feet = inchToFeet(63);
console.log(parseInt(feet));



// feet to inch


function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}

let inch = feetToInch(5);
console.log(inch);
