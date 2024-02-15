var array = [0, 500.0, 1230.3];
var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
console.log(lines[1]);
console.log(lines[2]);
var salary2 = parseFloat(lines[1]) + parseFloat(lines[2]) * 0.15;
console.log(salary2);
console.log("TOTAL = R$ ".concat(salary2.toFixed(2)) + "\n");
