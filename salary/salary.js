var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
var salary = lines[1] * lines[2];
console.log("NUMBER = ".concat(lines[0], "\nSALARY = U$ ").concat(salary.toFixed(2)));
