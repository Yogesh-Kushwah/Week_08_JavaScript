// Step 1: Generate 10 random 3-digit numbers and store in an array
let numbers = [];

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // Random number between 100-999
    numbers.push(randomNum);
}

// Step 2: Find the 2nd smallest and 2nd largest without sorting
let min1 = Infinity, min2 = Infinity;
let max1 = -Infinity, max2 = -Infinity;

// Step 3: Find the smallest and largest numbers
for (let num of numbers) {
    // Finding the two smallest numbers
    if (num < min1) {
        min2 = min1;
        min1 = num;
    } else if (num < min2 && num !== min1) {
        min2 = num;
    }

    // Finding the two largest numbers
    if (num > max1) {
        max2 = max1;
        max1 = num;
    } else if (num > max2 && num !== max1) {
        max2 = num;
    }
}

// Step 4: Print the results
console.log("Generated Array:", numbers);
console.log("2nd Smallest Number:", min2);
console.log("2nd Largest Number:", max2);
