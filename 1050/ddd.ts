// https://www.beecrowd.com.br/judge/en/problems/view/1050
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const number = Number(lines[0]);
console.log(number);
if (number === 61) {
  console.log("Brasilia");
} else if (number === 71) {
  console.log("Salvador");
} else if (number === 11) {
  console.log("Sao Paulo");
} else if (number === 21) {
  console.log("Rio de Janeiro");
} else if (number === 32) {
  console.log("Juiz de Fora");
} else if (number === 19) {
  console.log("Campinas");
} else if (number === 27) {
  console.log("Vitoria");
} else if (number === 31) {
  console.log("Belo Horizonte");
} else {
  console.log("DDD nao cadastrado");
}
