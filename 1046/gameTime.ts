// https://www.beecrowd.com.br/judge/en/problems/view/1046
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);
console.log(lines);

const calcurateHour = () => {
  const begin = lines[0];
  const end = lines[1];
  let hours;

  if (begin < end) {
    hours = end - begin;
  } else if (begin > end) {
    hours = 24 - begin + end;
  } else {
    hours = 24;
  }
  return hours;
};
const hours = calcurateHour();
console.log(`O JOGO DUROU ${hours} HORA(S)`);
