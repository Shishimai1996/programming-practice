// https://www.beecrowd.com.br/judge/en/problems/view/1064
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split("\n").map(Number);

// const findPositive = () => {
//   let countPositive = 0;
//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i] >= 0) {
//       countPositive++;
//     }
//   }
//   console.log(`${countPositive} valores positivos`);
// };

// findPositive();

// const average = () => {
//   let positiveArray: number[] = [];
//   let sum = 0;
//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i] >= 0) {
//       positiveArray.push(lines[i]);
//       sum += lines[i];
//     }
//   }
//   const calcurate = sum / positiveArray.length;
//   console.log(calcurate);
// };

// average();

interface GetAvgWithPositiveCountProps {
  numbers: Array<number>;
}
interface GetAvgWithPositiveCountResult {
  avg: number;
  count_positives: number;
}

function getAvgAndPositive({
  numbers,
}: GetAvgWithPositiveCountProps): GetAvgWithPositiveCountResult {
  let countPositive = 0;
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] >= 0) {
      countPositive++;
      sum += lines[i];
    }
  }
  if (countPositive == 0) {
    return { avg: 0, count_positives: 0 };
  }
  return {
    avg: sum / countPositive,
    count_positives: countPositive,
  };
}
const result = getAvgAndPositive(lines);
console.log(`${result.count_positives} valores positivos`);
console.log(result.avg);
