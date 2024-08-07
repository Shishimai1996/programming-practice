// https://www.beecrowd.com.br/judge/en/problems/view/1073

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);
console.log(lines);

const findEven = () => {
  const n = lines[0];
  if (n > 5 && n < 2000) {
    let even: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        even.push(i);
      }
    }
    console.log(even);
    return even;
  } else {
    return [];
  }
};

const even = findEven();
const calculate = (even: number[]) => {
  let result: number[] = [];
  for (let i = 0; i < even.length; i++) {
    result.push(even[i] * even[i]);
    console.log(`${even[i]}^2 = ${result[i]}`);
  }
};

if (even) {
  calculate(even);
}
