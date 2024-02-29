//https://judge.beecrowd.com/en/problems/view/1036
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

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

console.log(a);
const sqrt = b * b - 4 * a * c;
console.log(sqrt);

const bhaskara = () => {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Impossivel calcular");
  } else if (sqrt < 0) {
    console.log("Impossivel calcular");
  } else {
    const R1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    const R2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
  }
};

bhaskara();

//another solution

import * as path from "path";
interface InputData {
  a: number;
  b: number;
  c: number;
}
// function to read the data from the file
function readAndValidateData(inputFile: string): InputData | null {
  // use try catch so if something wrong with the format of the input data we don't crash and we return null instead as validation
  try {
    const filePath: string = path.join(__dirname, inputFile);
    var input = require("fs").readFileSync(filePath, "utf8");
    var lines = input.split("\n");
    const numbers = lines[0].split(" ").map(Number);
    return {
      a: numbers[0],
      b: numbers[1],
      c: numbers[2],
    };
  } catch (err) {
    console.log("Error reading the data", err);
  }
  return null;
}

function bhaskara({ a, b, c }: InputData): string {
  // the formula looks like the following:
  // r1=(-b+sqrt((b*b)-4*a*c))/2*a and r2=((-1*b)+sqrt((b*b)-4*a*c))/2*a
  // so `a` should not be 0 and ((b*b)-4*a*c) should not be negative
  // so let's check these two things:
  if (a == 0) {
    return "Impossivel calcular";
  }
  const insideSqrt = b * b - 4 * a * c;
  if (insideSqrt < 0) {
    return "Impossivel calcular";
  }
  // now after we check the possible checks let's calculate the solution
  const r1 = (-b + Math.sqrt(insideSqrt)) / (2 * a);
  const r2 = (-b - Math.sqrt(insideSqrt)) / (2 * a);
  return `R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`;
}

function solution() {
  const inputData = readAndValidateData("index.txt");
  // if the input data is null then something wrong in the input data and we just close the solution
  if (!inputData) {
    return;
  }
  // call the logic to solve the solution
  const result = bhaskara(inputData);
  console.log(result);
}
solution();
