var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const product1 = lines[0].split(" ").map(Number);
const product2 = lines[1].split(" ").map(Number);

const calculate = product1[1] * product1[2] + product2[1] * product2[2];
console.log(`VALOR A PAGAR: R$ ${calculate.toFixed(2)}`);
