// https://www.beecrowd.com.br/judge/en/problems/view/1067

import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8").trim();

const countOddNumbers = () => {
  const oddNumbers = [];
  for (let i = 0; i <= input; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  console.log(oddNumbers.join("\n"));
};

countOddNumbers();
