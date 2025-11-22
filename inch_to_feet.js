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




// kg to gr 

function kgToGr(kg){
    let gr = kg * 1000;
    return gr;
}

let gr = kgToGr(5);
console.log(gr);



// gr to kg 


function grToKg(gr){
    let kg = gr * 0.001;
    return kg;
}

let kg = grToKg(1500);
console.log(kg);
