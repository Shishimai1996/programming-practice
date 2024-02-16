// https://www.beecrowd.com.br/judge/en/problems/view/1038
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const table = [4.0, 4.5, 5.0, 2.0, 1.5];
const calicurate = table[lines[0] - 1] * lines[1];

console.log(calicurate);

console.log(`Total: R$ ${calicurate.toFixed(2)}`);
