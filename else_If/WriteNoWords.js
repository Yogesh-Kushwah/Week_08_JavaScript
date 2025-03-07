// 1. Read a single digit number and write the number in word

const [num] = process.argv.slice(2).map(Number);

if (num < 0 || num > 9 || isNaN(num)) {
    console.log("Please enter a single-digit number (0-9).");
} else {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    console.log(words[num]);
}