//problem: https://www.beecrowd.com.br/judge/en/problems/view/1012
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");
var number = input.split(" ");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const triangle = (Number(number[0]) * Number(number[2])) / 2;
const circle = Number(number[2]) ** 2 * 3.14159;
const trapezium =
  ((Number(number[0]) + Number(number[1])) * Number(number[2])) / 2;
const square = Number(number[1]) ** 2;
const rectangle = Number(number[0]) * Number(number[1]);

console.log(`TRIANGULO: ${triangle.toFixed(3)}
CIRCULO: ${circle.toFixed(3)}
TRAPEZIO: ${trapezium.toFixed(3)}
QUADRADO: ${square.toFixed(3)}
RETANGULO: ${rectangle.toFixed(3)}`);
