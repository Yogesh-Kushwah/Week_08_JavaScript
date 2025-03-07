// Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c

let numbers=[];

const[num1,num2,num3]=process.argv.slice(2).map(Number);

let firsOp= num1+num2*num3;
numbers.push(firsOp);
let secOp=num1%num2+num3;
numbers.push(secOp);
let thirdOp=num1+num2/num3;
numbers.push(thirdOp);
let fourOp=num1*num2+num3;
numbers.push(fourOp);

let minimum= Math.min(...numbers);
let maximum=Math.max(...numbers);

console.log("Numbers",numbers);
console.log("Maximum",maximum);
console.log("Minimum",minimum)

