// https://www.beecrowd.com.br/judge/en/problems/view/1041
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const point = () => {
  var x = lines[0];
  var y = lines[1];
  if (x === 0 && y === 0) {
    console.log("Origem");
  } else if (x === 0) {
    console.log("Eixo Y");
  } else if (y === 0) {
    console.log("Eixo X");
  } else if (x > 0 && y > 0) {
    console.log("Q1");
  } else if (x > 0 && y < 0) {
    console.log("Q4");
  } else if (x < 0 && y > 0) {
    console.log("Q2");
  } else if (x < 0 && y < 0) {
    console.log("Q3");
  }
};
point();

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const number = lines[0].split(' ').map(parseFloat);
// const point = (number) => {
//   var x = number[0];
//   var y = number[1];
//   if (x === 0 && y === 0) {
//     console.log("Origem");
//   }else if(x=== 0 ){
//       console.log('Eixo Y');
//   }else if(y === 0){
//       console.log('Eixo X');
//   } else if (x > 0 && y > 0) {
//     console.log("Q1");
//   } else if (x > 0 && y < 0) {
//     console.log("Q4");
//   } else if (x < 0 && y > 0) {
//     console.log("Q2");
//   } else if (x < 0 && y < 0) {
//     console.log("Q3");
//   }
// };

// point(number);
