// https://www.beecrowd.com.br/judge/en/problems/view/1048

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8").trim();
console.log(input);

// var lines = input.split("\n");
// console.log(lines);

const number: number = parseFloat(input);
console.log(number);
const salary = () => {
  if (number >= 0 && number <= 400) {
    console.log(
      "Novo salario: " +
        `${(number + number * 0.15).toFixed(2)}` +
        "\n" +
        "Reajuste ganho: " +
        `${(number * 0.15).toFixed(2)}` +
        "\n" +
        "Em percentual: 15 %"
    );
  } else if (number > 400 && number <= 800) {
    console.log(
      "Novo salario: " +
        `${(number + number * 0.12).toFixed(2)}` +
        "\n" +
        "Reajuste ganho: " +
        `${(number * 0.12).toFixed(2)}` +
        "\n" +
        "Em percentual: 12 %"
    );
  } else if (number > 800 && number <= 1200) {
    console.log(
      "Novo salario: " +
        `${(number + number * 0.1).toFixed(2)}` +
        "\n" +
        "Reajuste ganho: " +
        `${(number * 0.1).toFixed(2)}` +
        "\n" +
        "Em percentual: 10 %"
    );
  } else if (number > 1200 && number <= 2000) {
    console.log(
      "Novo salario: " +
        `${(number + number * 0.07).toFixed(2)}` +
        "\n" +
        "Reajuste ganho: " +
        `${(number * 0.07).toFixed(2)}` +
        "\n" +
        "Em percentual: 7 %"
    );
  } else if (number >= 2000) {
    console.log(
      "Novo salario: " +
        `${(number + number * 0.04).toFixed(2)}` +
        "\n" +
        "Reajuste ganho: " +
        `${(number * 0.04).toFixed(2)}` +
        "\n" +
        "Em percentual: 4 %"
    );
  }
};
salary();
