// Extend the above program to sort the array and then find the 2nd largest
// and the 2nd smallest element.

var numbers = [];

for (var i = 0; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * 900) + 100; // Random number between 100-999
    numbers.push(randomNum);
}

// Step 2: Sort the array in ascending order
var sortedNumbers = numbers.slice(); 

sortedNumbers.sort(function(a, b) {
    return a - b; });

// Step 3: Find the 2nd smallest and 2nd largest elements
var secondSmallest = sortedNumbers[1];
var secondLargest = sortedNumbers[sortedNumbers.length - 2];

// Step 4: Print the results
console.log("Generated Array:", numbers);
console.log("Sorted Array:", sortedNumbers);
console.log("2nd Smallest Number:", secondSmallest);
console.log("2nd Largest Number:", secondLargest);
