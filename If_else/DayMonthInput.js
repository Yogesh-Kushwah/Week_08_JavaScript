// Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.

const[day,month]=process.argv.slice(2).map(Number);

console.log(
    (month===3 && day>=20)||
    (month>3 && month<6 )||
    (month===6 && day<=20)
);
