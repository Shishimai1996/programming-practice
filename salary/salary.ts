var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

const salary = lines[1] * lines[2];
console.log(`NUMBER = ${lines[0]}\nSALARY = U$ ${salary.toFixed(2)}`);
