var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

console.log(input);
for (let i = 0; i < lines.length; i++) {
  const input = lines[i];
  const output = input * 2;
  console.log(output + " minutos");
}
