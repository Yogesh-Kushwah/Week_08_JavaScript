// Write a function to check if the two numbers are Palindromes

function isPalindrome(num) {
    let str = num.toString(); // Convert number to string
    let rev = str.split('').reverse().join(''); // Reverse the string
    return str === rev; // Check if original and reversed strings are same
}

// Function to check if two numbers are palindromes
function checkTwoPalindromes(num1, num2) {
    let result1 = isPalindrome(num1) ? `${num1} is a palindrome.` : `${num1} is not a palindrome.`;
    let result2 = isPalindrome(num2) ? `${num2} is a palindrome.` : `${num2} is not a palindrome.`;
    
    return result1 + " " + result2;
}


console.log(checkTwoPalindromes(121, 123)); 
console.log(checkTwoPalindromes(454, 787)); 
console.log(checkTwoPalindromes(987, 676)); 
