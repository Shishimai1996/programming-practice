// https://www.beecrowd.com.br/judge/en/problems/view/1060
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8").trim();
var lines = input.split("\n").map(Number);

const countPositiveNumber = (lines: number[]) => {
  let result = 0;
  lines.forEach((element: number) => {
    if (element > 0) {
      result++;
    }
  });
  return result;
};

console.log(countPositiveNumber(lines) + " valores positivos");
