// https://www.beecrowd.com.br/judge/en/problems/view/1045

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const triangleType = (lines: number[]) => {
  const sort = lines.sort((a: number, b: number) => b - a);
  const a = sort[0];
  const b = sort[1];
  const c = sort[2];

  let results: string[] = [];

  if (a >= b + c) {
    results.push("NAO FORMA TRIANGULO");
  } else {
    if (a * a === b * b + c * c) {
      results.push("TRIANGULO RETANGULO");
    }
    if (a * a > b * b + c * c) {
      results.push("TRIANGULO OBTUSANGULO");
    }
    if (a * a < b * b + c * c) {
      results.push("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
      results.push("TRIANGULO EQUILATERO");
    } else if (a === b || b === c || a === c) {
      results.push("TRIANGULO ISOSCELES");
    }
  }
  return results;
};

const result = triangleType(lines);
console.log(result.join("\n"));
