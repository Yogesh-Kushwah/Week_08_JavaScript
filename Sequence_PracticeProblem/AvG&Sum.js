// Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
// then find their sum and the average
let numbers=[];
let sum=0;

for(let i=0;i<5;i++){
    var number=Math.floor(Math.random()*90)+10;
    
    numbers.push(number);
    sum +=number;

}

let Avg= sum/numbers.length;

console.log("GenerateNum ",numbers);
console.log("Sum ",sum);
console.log("Average of Num ",Avg);
