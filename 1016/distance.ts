//problem: https://www.beecrowd.com.br/judge/en/problems/view/1016

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

console.log(input);
for (let i = 0; i < lines.length; i++) {
  const input = lines[i];
  const output = input * 2;
  console.log(output + " minutos");
}
