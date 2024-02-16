// problem: https://www.beecrowd.com.br/judge/en/problems/view/1008

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

const salary = lines[1] * lines[2];
console.log(`NUMBER = ${lines[0]}\nSALARY = U$ ${salary.toFixed(2)}`);
