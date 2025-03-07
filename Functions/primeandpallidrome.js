const prompt = require("prompt-sync")(); // Import prompt-sync

// Function to check if a number is Prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the Palindrome of a number
function getPalindrome(num) {
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return parseInt(rev);
}

// Function to check if the number and its palindrome are both prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let pal = getPalindrome(num);
        if (isPrime(pal)) {
            console.log(`${num} is prime and its palindrome ${pal} is also prime.`);
        } else {
            console.log(`${num} is prime but its palindrome ${pal} is not prime.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// Take user input using prompt-sync
let number = parseInt(prompt("Enter a number: "));

if (!isNaN(number)) {
    checkPrimeAndPalindrome(number);
} else {
    console.log("Please enter a valid number.");
}
