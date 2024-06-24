// https://www.beecrowd.com.br/judge/en/problems/view/1048

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8").trim();

const salary = (number: number) => {
  if (number >= 0 && number <= 400) {
    return 15;
  } else if (number > 400 && number <= 800) {
    return 12;
  } else if (number > 800 && number <= 1200) {
    return 10;
  } else if (number > 1200 && number <= 2000) {
    return 7;
  } else {
    return 4;
  }
};

const result = () => {
  const number: number = parseFloat(input);
  const percent = salary(number);
  return console.log(
    "Novo salario: " +
      `${(number + number * percent * 0.01).toFixed(2)}` +
      "\n" +
      "Reajuste ganho: " +
      `${(number * percent * 0.01).toFixed(2)}` +
      "\n" +
      `Em percentual: ${percent} %`
  );
};

result();
