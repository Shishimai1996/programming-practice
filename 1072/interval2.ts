// https://www.beecrowd.com.br/judge/en/problems/view/1072

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);

const countNumber = lines[0];
const array = lines.slice(1);

const interval = () => {
  let countIn = 0;
  let countOut = 0;

  array.forEach((array: number) => {
    if (array < 0) {
      return;
    } else if (array >= 10 && array <= 20) {
      countIn++;
    } else {
      countOut++;
    }
  });
  return { in: countIn, out: countOut };
};

const result = interval();
console.log(`${result.in} in\n${result.out} out`);
