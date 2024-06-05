// https://www.beecrowd.com.br/judge/en/problems/view/1043
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const Triangle = () => {
  const a = parseFloat(lines[0].toFixed(1));
  const b = parseFloat(lines[1].toFixed(1));
  const c = parseFloat(lines[2].toFixed(1));

  if (a + b > c && b + c > a && c + a > b) {
    const perimetro = a + b + c;
    console.log("Perimetro = " + perimetro.toFixed(1));
  } else {
    const area = ((a + b) * c) / 2;
    console.log("Area = " + area.toFixed(1));
  }
};

Triangle();
