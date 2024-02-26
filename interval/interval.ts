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

const number = Number(lines[0]);
const output = () => {
  if (number >= 0 && number <= 25) {
    console.log(`Intervalo [0,25]`);
  } else if (number > 25 && number <= 50) {
    console.log(`Intervalo (25,50]`);
  } else if (number > 50 && number <= 75) {
    console.log(`Intervalo (50,75]`);
  } else if (number > 75 && number <= 100) {
    console.log(`Intervalo (75,100]`);
  } else {
    console.log(`Fora de intervalo`);
  }
};

output();
