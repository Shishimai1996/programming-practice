//https://judge.beecrowd.com/en/problems/view/1018
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.split("\n");

const bankNote = () => {
  const value = Number(lines[0]);
  if (0 < value && value < 1000000) {
    const r1 = Math.trunc(value / 100);
    const r2 = Math.trunc((value - r1 * 100) / 50);
    const r3 = Math.trunc((value - r1 * 100 - r2 * 50) / 20);
    const r4 = Math.trunc((value - r1 * 100 - r2 * 50 - r3 * 20) / 10);
    const r5 = Math.trunc((value - r1 * 100 - r2 * 50 - r3 * 20 - r4 * 10) / 5);
    const r6 = Math.trunc(
      (value - r1 * 100 - r2 * 50 - r3 * 20 - r4 * 10 - r5 * 5) / 2
    );
    const r7 = Math.trunc(
      (value - r1 * 100 - r2 * 50 - r3 * 20 - r4 * 10 - r5 * 5 - r6 * 2) / 1
    );
    console.log(
      `${value}\n${r1} nota(s) de R$ 100,00\n${r2} nota(s) de R$ 50,00\n${r3} nota(s) de R$ 20,00\n${r4} nota(s) de R$ 10,00\n${r5} nota(s) de R$ 5,00\n${r6} nota(s) de R$ 2,00\n${r7} nota(s) de R$ 1,00`
    );
  }
};

bankNote();
