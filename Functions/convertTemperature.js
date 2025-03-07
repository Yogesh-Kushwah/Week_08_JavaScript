function convertTemperature(value, type) {
    switch (type) {
        case 'C': // Convert Celsius to Fahrenheit
            if (value >= 0 && value <= 100) {
                let degF = (value * 9/5) + 32;
                return `${value}°C = ${degF.toFixed(2)}°F`;
            } else {
                return "Value out of range (0°C - 100°C)";
            }
        
        case 'F': // Convert Fahrenheit to Celsius
            if (value >= 32 && value <= 212) {
                let degC = (value - 32) * 5/9;
                return `${value}°F = ${degC.toFixed(2)}°C`;
            } else {
                return "Value out of range (32°F - 212°F)";
            }
        
        default:
            return "Invalid type. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Example Usage:
console.log(convertTemperature(50, 'C')); 
console.log(convertTemperature(100, 'F')); 
console.log(convertTemperature(110, 'C')); 
console.log(convertTemperature(20, 'F')); 
console.log(convertTemperature(30, 'X')); 
