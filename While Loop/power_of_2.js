const n = parseInt(process.argv[2]); 
let power = 1, i = 0; 
while (i <= n && power <= 256) { 
    console.log(`2^${i} = ${power}`); 
    power *= 2; 
    i++; 
}
