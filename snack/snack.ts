var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.trim().split(" ").map(Number);

const table = [4.0, 4.5, 5.0, 2.0, 1.5];
const calicurate = table[lines[0] - 1] * lines[1];

console.log(calicurate);

console.log(`Total: R$ ${calicurate.toFixed(2)}`);
