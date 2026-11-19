
// Import prompt-sync to receive user input
const prompt = require('prompt-sync')();

// Ask the user to enter a temperature in Fahrenheit
let fahrenheit = prompt("Enter temperature in Fahrenheit: ");

// Convert the input from a string to a number
fahrenheit = Number(fahrenheit);

// Calculate the temperature in Celsius
let celsius = (fahrenheit - 32) * (5 / 9);

// Display the conversion results
console.log("\nTemperature Conversion");
console.log("----------------------");
console.log("Fahrenheit: " + fahrenheit);
console.log("Celsius: " + celsius.toFixed(2));

// Bonus Challenge: Display a creative message
console.log(
    "\nThe temperature is " + celsius.toFixed(2) +
    " C. Have a great day!"
);
