// https://www.beecrowd.com.br/judge/en/problems/view/1065
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);
console.log(lines);

const countEven = (lines: number[]) => {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};
console.log(countEven(lines) + " valores pares");
