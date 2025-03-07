// Write a program that takes User Inputs and does Unit Conversion of

// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

// Take two inputs: value and conversion type (1 = ft to in, 2 = ft to m, 3 = in to ft, 4 = m to ft)
// let value = parseFloat(process.argv[2]);
// let conversionType = parseInt(process.argv[3]);

const[value,conversionType]= process.argv.slice(2).map(Number);

// Perform the unit conversion
switch (conversionType) {
    case 1: // Feet to Inches
        console.log(value + " ft = " + (value * 12) + " in");
        break;
    case 2: // Feet to Meters
        console.log(value + " ft = " + (value * 0.3048) + " m");
        break;
    case 3: // Inches to Feet
        console.log(value + " in = " + (value / 12) + " ft");
        break;
    case 4: // Meters to Feet
        console.log(value + " m = " + (value / 0.3048) + " ft");
        break;
    default:
        console.log("Invalid conversion type");
}