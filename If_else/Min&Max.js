// 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

let number=[];

for(let i=0;i<5;i++){

    let randomValue= Math.floor(Math.random()*900)+100;
    number.push(randomValue);
}

let min= Math.min(...number);
let max=Math.max(...number);

console.log("Number ", number);
console.log("Min", min);
console.log("max", max);
