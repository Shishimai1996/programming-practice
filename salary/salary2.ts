// problem: https://www.beecrowd.com.br/judge/en/problems/view/1009
const array = [0, 500.0, 1230.3];

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

console.log(lines[1]);
console.log(lines[2]);

const salary2 = parseFloat(lines[1]) + parseFloat(lines[2]) * 0.15;
console.log(salary2);
console.log(`TOTAL = R$ ${salary2.toFixed(2)}`);
