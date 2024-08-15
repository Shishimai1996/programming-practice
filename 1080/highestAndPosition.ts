// https://www.beecrowd.com.br/judge/en/problems/view/1080

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);
console.log(lines);

const findHighest = () => {
  const aryMax = function (a: number, b: number) {
    return Math.max(a, b);
  };

  let max = lines.reduce(aryMax);
  let maxIndex = lines.indexOf(max) + 1;
  console.log(max);
  console.log(maxIndex);
  return max;
};
findHighest();
