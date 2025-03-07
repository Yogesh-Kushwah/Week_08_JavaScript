const[num]=process.argv.slice(2).map(Number);
let fact=1;
if(num<0||isNaN(num)){
    console.log("Please enter a positive integer.");
    process.exit(1);
}

for(let i=1;i<=num;i++){

    fact *=i;
}

console.log(`factorial of number ${fact}`);