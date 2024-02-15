var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
var numbers = input.split(" ");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const triangle = (Number(numbers[0]) * Number(numbers[2])) / 2;
const circle = Number(numbers[2]) ** 2 * 3.14159;
const trapezium =
  ((Number(numbers[0]) + Number(numbers[1])) * Number(numbers[2])) / 2;
const square = Number(numbers[1]) ** 2;
const rectangle = Number(numbers[0]) * Number(numbers[1]);

console.log(`TRIANGULO: ${triangle.toFixed(3)}
CIRCULO: ${circle.toFixed(3)}
TRAPEZIO: ${trapezium.toFixed(3)}
QUADRADO: ${square.toFixed(3)}
RETANGULO: ${rectangle.toFixed(3)}`);
