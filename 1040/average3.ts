// https://www.beecrowd.com.br/judge/en/problems/view/1040

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");

const numbers = input.split("\n");

var lines = numbers[0].trim().split(" ").map(Number);

const calculate = () => {
  const calculate =
    (lines[0] * 2 + lines[1] * 3 + lines[2] * 4 + lines[3] * 1) /
    (2 + 3 + 4 + 1);
  console.log("Media:", calculate.toFixed(1));
  return calculate;
};

const average3 = () => {
  const media = calculate();
  if (media >= 7.0) {
    console.log("Aluno aprovado.");
  } else if (media < 5.0) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Aluno em exame.");
    console.log("Nota do exame:", numbers[1]);
    const calculate = (Number(numbers[1]) + media) / 2;
    if (calculate >= 5) {
      console.log("Aluno aprovado.");
    } else {
      console.log("Aluno reprovado.");
    }

    console.log("Media final:", calculate.toFixed(1));
  }
};
average3();
