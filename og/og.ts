import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

interface IChildren {
  trim(): string;
  input: number[];
}
const Og = (input: IChildren) => {
  const results: number[] = [];
  for (let i = 0; i > lines.length; i++) {
    const numStr: string = input.trim();
    console.log(numStr);
    const numArray: number[] = numStr.split(" ").map(Number);
    console.log(numArray);
    const calculate = numArray[0] + numArray[1];
    results.push(calculate);
    console.log(calculate);
  }
};

Og(input);
