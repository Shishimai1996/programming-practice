var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8');
var lines = input.split('\r\n');
console.log(lines);
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var hour = parseFloat(lines[0]);
var speed = parseFloat(lines[1]);
console.log(hour);
console.log(speed);
var distance = hour * speed;
var fuel = distance / 12;
console.log(fuel.toFixed(3));
