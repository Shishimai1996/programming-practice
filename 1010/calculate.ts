// https://judge.beecrowd.com/en/problems/view/1010

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
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
