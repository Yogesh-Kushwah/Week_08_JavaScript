// Extend the program to take a range of number as input and output the Prime
// Numbers in that range.

const start = Number(process.argv[2]);
const end = Number(process.argv[3]);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
}
