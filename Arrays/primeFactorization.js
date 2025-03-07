// Extend the Prime Factorization Program to store all the Prime Factors of a
// number n into an array and finally display the output.

function getPrimeFactors(n) {
    let factors = [];
    let i = 2;

    // Divide by 2 until n is odd
    while (n % i === 0) {
        factors.push(i);
        n = n / i;
    }

    // Check for odd factors from 3 onwards
    for (i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

//  Get prime factors of 84
let number = 84;
let primeFactors = getPrimeFactors(number);
console.log("Prime Factors of", number, "are:", primeFactors);
