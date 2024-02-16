// https://judge.beecrowd.com/en/problems/view/1013

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
const numbers = lines[0].split(" ").map(Number);
console.log(numbers);
const findGreatest = (a: any, b: any) => {
  const maiorAB = (a + b + Math.abs(a - b)) / 2;
  return maiorAB;
};

const compareNumbers = () => {
  const first = findGreatest(numbers[0], numbers[1]);
  const second = findGreatest(first, numbers[2]);
  if (first > second) {
    console.log(`${first} eh o maior`);
  } else if (first < second) {
    console.log(`${second} eh o maior`);
  }
};

compareNumbers();
