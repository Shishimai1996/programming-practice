//problem: https://www.beecrowd.com.br/judge/en/problems/view/1005

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

console.log(lines);
const calculate =
  (parseFloat(lines[0]) * 3.5 + parseFloat(lines[1]) * 7.5) / (3.5 + 7.5);
console.log(`MEDIA = ${calculate.toFixed(5)}`);
