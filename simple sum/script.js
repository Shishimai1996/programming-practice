const fs = require("fs");
const path = require("path");

// Read input from file
// const inputFile = "input.txt";
const inputFile = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputFile, "utf8").trim().split("\n");

// Extract the integers
const A = parseInt(input[0]);
const B = parseInt(input[1]);

// Calculate the sum
const SOMA = A + B;

// Print the value of SOMA
console.log("SOMA =", SOMA);
