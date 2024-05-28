// https://www.beecrowd.com.br/judge/en/problems/view/1021
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const notas = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

let number: number = parseFloat(lines[0]);
console.log("NOTAS:");
notas.forEach((nota) => {
  console.log(`${Math.floor(number / nota)} nota(s) de R$ ${nota.toFixed(2)}`);
  number = parseFloat((number % nota).toFixed(2));
});
console.log("MOEDAS:");
moedas.forEach((moeda) => {
  console.log(
    `${Math.floor(number / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`
  );
  number = parseFloat((number % moeda).toFixed(2));
});
