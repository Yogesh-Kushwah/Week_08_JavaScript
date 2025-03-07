function findRepeatedDigits() {
    let repeatedNumbers = [];

    // Loop through numbers from 10 to 99 (since single-digit numbers can't be repeated)
    for (let i = 10; i < 100; i++) {
        let strNum = i.toString(); // Convert number to string
        if (strNum[0] === strNum[1]) { // Check if both digits are the same
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Call the function and display the result
let result = findRepeatedDigits();
console.log("Numbers with repeated digits:", result);
