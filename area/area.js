var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
var numbers = input.split(" ");
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var triangle = Number(numbers[0]) * Number(numbers[2]);
var circle = Math.pow(Number(numbers[2]), 2) * 3.14159;
var trapezium = (Number(numbers[0]) + Number(numbers[1])) * Number(numbers[2]);
var square = Math.pow(Number(numbers[1]), 2);
var rectangle = Number(numbers[0]) * Number(numbers[1]);
console.log("TRIANGULO: ".concat(triangle.toFixed(3), "\n\nCIRCULO: ").concat(circle.toFixed(3), "\n\nTRAPEZIO: ").concat(trapezium.toFixed(3), "\n\nQUADRADO: ").concat(square.toFixed(3), "\n\nRETANGULO: ").concat(rectangle.toFixed(3)));
