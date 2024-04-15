// https://www.beecrowd.com.br/judge/en/problems/view/1042
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const sortedNumbers = lines.slice().sort((a: number, b: number) => a - b);
const sortedSequence = sortedNumbers.join("\n");
const sequence = lines.join("\n");

console.log(sortedSequence);
console.log("");
console.log(sequence);
