const n=parseInt(process.argv[2]);

if(n<0||isNaN(n)){
    console.log("Please enter a positive integer.");
    process.exit(1);
}

for(let i=2;i<n;i++){
    if(n%i ===0){
        console.log("Number is not prime");
        process.exit(1);
    }  
}
console.log("Number is prime");