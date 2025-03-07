// 1. Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n.

// Get n from command line and convert it to a number
const n = Number(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
    process.exit(1);
}

// Print the table of powers of 2
console.log(`Powers of 2 up to 2^${n}`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${2 ** i}`);
}
