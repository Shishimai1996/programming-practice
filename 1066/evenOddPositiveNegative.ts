// https://www.beecrowd.com.br/judge/en/problems/view/1066
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);
console.log(lines);

const count = () => {
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 === 0) {
      even++;
    }
    if (lines[i] % 2 !== 0) {
      odd++;
    }
    if (lines[i] > 0) {
      positive++;
    }
    if (lines[i] < 0) {
      negative++;
    }
  }
  return { even: even, odd: odd, positive: positive, negative: negative };
};

const result = count();
console.log(`${result.even} valor(es) par(es)
${result.odd} valor(es) impar(es)
${result.positive} valor(es) positivo(s)
${result.negative} valor(es) negativo(s)`);
