var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

console.log(lines);
const calculate =
  (parseFloat(lines[0]) * 3.5 + parseFloat(lines[1]) * 7.5) / (3.5 + 7.5);
console.log(`MEDIA = ${calculate.toFixed(5)}`);
