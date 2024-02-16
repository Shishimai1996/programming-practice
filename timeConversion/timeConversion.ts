// https://www.beecrowd.com.br/judge/en/problems/view/1019

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// ss: 1~59
// mi: 60~3599
// HH: 3600~

// input: 556, 140153 -> X
// output: 0:9:16, 38:55:53

// if X <60
// 00:00:X

// else if 60<X<3600
// 00:parseInt(X/60):(X-(X/60))*60

// else if X>3600
// parseInt(X/3600):parseInt((X-(X/3600))*60):X-(X-(X/3600))*60

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");
console.log(input);

for (let i = 0; i < lines.length; i++) {
  const inputVal = parseInt(lines[i]);

  if (inputVal < 60) {
    const output = `0:0:${inputVal}`;
    console.log(output);
  } else if (60 <= inputVal && inputVal < 3600) {
    const minutes = Math.floor(inputVal / 60);
    const seconds = inputVal % 60;
    const output = `0:${minutes.toString().padStart(1, "0")}:${seconds
      .toString()
      .padStart(1, "0")}`;
    console.log(output);
  } else if (inputVal >= 3600) {
    const hours = Math.floor(inputVal / 3600);
    const remainingSeconds = inputVal % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const output = `${hours.toString().padStart(1, "0")}:${minutes
      .toString()
      .padStart(1, "0")}:${seconds.toString().padStart(1, "0")}`;
    console.log(output);
  }
}
