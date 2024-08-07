// https://www.beecrowd.com.br/judge/en/problems/view/1070

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);

const number: number = lines[0];
const generateNumber = (number: number): number[] => {
  let array: number[] = [];
  for (let i = 0; array.length < 6; i++) {
    if ((number + i) % 2 === 1) {
      array.push(number + i);
    }
  }
  return array;
};

const result = generateNumber(number);

result.forEach((num) => console.log(num));
