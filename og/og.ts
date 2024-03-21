//https://judge.beecrowd.com/en/problems/view/1387
import * as path from "path";

interface Pair {
  left: number;
  right: number;
}
interface InputData {
  pairs: Pair[];
}
// function to read the data from the file
function readAndValidateData(inputFile: string): InputData | null {
  // use try catch so if something wrong with the format of the input data we don't crash and we return null instead as validation
  try {
    const filePath: string = path.join(__dirname, inputFile);
    var input = require("fs").readFileSync(filePath, "utf8");
    var lines = input.split("\n");
    const pairs = lines.map((item: string) => {
      const line = item.split(" ").map(Number);
      return { left: line[0], right: line[1] };
    });
    return { pairs: pairs };
  } catch (err) {
    console.log("Error reading the data", err);
  }
  return null;
}

const Og = (input: InputData) => {
  const pairs = input.pairs;

  for (const element of pairs) {
    if (element.left === 0 && element.right === 0) {
      return null;
    } else {
      const calculate = element.left + element.right;

      console.log(calculate);
    }
  }
};

function solution() {
  const inputData = readAndValidateData("index.txt");
  // if the input data is null then something wrong in the input data and we just close the solution
  if (!inputData) {
    return;
  }
  // call the logic to solve the solution
  const result = Og(inputData);
  //   console.log(result);
}
solution();
