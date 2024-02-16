//Problem: https://www.beecrowd.com.br/judge/en/problems/view/1020

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

const age = () => {
  const day = Number(lines[0]);

  console.log(Math.ceil(1.1));
  console.log(Math.floor(1.1));
  console.log(800 % 30);

  if (day >= 365) {
    const years = Math.floor(day / 365);
    const months = Math.floor((day % 365) / 30);
    const days = day - years * 365 - months * 30;
    console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
  } else {
    const years = 0;
    const months = Math.floor(day / 30);
    const days = day % 30;
    console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
  }
};
age();
