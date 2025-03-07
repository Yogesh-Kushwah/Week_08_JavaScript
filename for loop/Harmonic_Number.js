const n=parseInt(process.argv[2]);

if(n<0||isNaN(n)){
    console.log("Please enter a positive integer.");
    process.exit(1);
}

let harmonic=0;
for(let i=1;i<=n;i++){
    harmonic +=1/i;
}

console.log(`Harmonic Number H(${n})=${harmonic} `);