// beecrowd | 1015 https://www.beecrowd.com.br/judge/en/problems/view/1015
// Distance Between Two Points
// Adapted by Neilor Tonin, URI  Brazil

// Timelimit: 1
// Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

// Distance =

// Input
// The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

// Output
// Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

// Input Sample	Output Sample
// 1.0 7.0
// 5.0 9.0

// 4.4721

// -2.5 0.4
// 12.1 7.3

// 16.1484

// 2.5 -0.4
// -12.2 7.0

// 16.4575
const fs = require("fs");
const path = require("path");
// Read input from file
// const inputFile = "input.txt";
const inputFile = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputFile, "utf8").trim().split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
//1.0 7.0 = a
const a = lines[0];
const b = lines[1];
//[1.0,7.0] = a
const arraya = a.split(" ").map(Number);
const arrayb = b.split(" ").map(Number);
//1.0 = x1
const X1 = arraya[0];
const X2 = arrayb[0];
const Y1 = arraya[1];
const Y2 = arrayb[1];

const deltaX = X2 - X1;
const deltaY = Y2 - Y1;
const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

console.log(distance.toFixed(4));
