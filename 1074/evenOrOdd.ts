// https://www.beecrowd.com.br/judge/en/problems/view/1074

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);
console.log(lines);

const evenOrOdd = (lines: number[]) => {
  for (let i = 1; i <= lines[0]; i++) {
    if (lines[i] === 0) {
      console.log("NULL");
    } else if (lines[i] < 0 && lines[i] % 2 === 0) {
      console.log("EVEN NEGATIVE");
    } else if (lines[i] < 0 && lines[i] % 2 !== 0) {
      console.log("ODD NEGATIVE");
    } else if (lines[i] > 0 && lines[i] % 2 === 0) {
      console.log("EVEN POSITIVE");
    } else if (lines[i] > 0 && lines[i] % 2 !== 0) {
      console.log("ODD POSITIVE");
    }
  }
};

evenOrOdd(lines);
