// https://www.beecrowd.com.br/judge/en/problems/view/1052
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8").trim();

var lines = input.split("\n");

const number: number = parseInt(lines[0]);

const month: { [key: number]: string } = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const transformMonth = () => {
  if (month[number]) {
    console.log(month[number]);
  }
};
transformMonth();
