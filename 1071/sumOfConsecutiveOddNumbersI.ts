// https://www.beecrowd.com.br/judge/en/problems/view/1070
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);

const sumOddNumbers = () => {
  let [x, y] = lines;
  if (y > x) {
    [x, y] = [y, x];
  }

  let array: number[] = [];
  for (let i = y + 1; i < x; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum;
};
console.log(sumOddNumbers());
