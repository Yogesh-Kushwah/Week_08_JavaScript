// Create a Map to store individuals by birth month
let birthMonths = new Map();

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)

    // If the month is not already in the map, initialize it with an empty array
    if (!birthMonths.has(month)) {
        birthMonths.set(month, []);
    }

    // Add the person number to the corresponding month
    birthMonths.get(month).push(i);
}

// Print the results
birthMonths.forEach((people, month) => {
    console.log(`Month ${month}: ${people.join(", ")}`);
});
