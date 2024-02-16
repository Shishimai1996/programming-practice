// problem: https://www.beecrowd.com.br/judge/en/problems/view/1017

var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf8");
var lines = input.split("\r\n");
console.log(lines);

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const hour = parseFloat(lines[0]);
const speed = parseFloat(lines[1]);
console.log(hour);
console.log(speed);

const distance = hour * speed;
const fuel = distance / 12;

console.log(fuel.toFixed(3));
