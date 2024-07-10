// https://www.beecrowd.com.br/judge/en/problems/view/1078
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const calcurate = () => {
  const number = lines[0];
  for (let i = 1; i < 11; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
};

calcurate();
