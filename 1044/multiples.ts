// https://www.beecrowd.com.br/judge/en/problems/view/1044
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var lines = input.trim().split(" ").map(Number);

const multiple = () => {
  if (lines[1] % lines[0] === 0 || lines[0] % lines[1] === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
};

multiple();

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const number = lines[0].split(' ').map(parseFloat);

// const multiple = (number)=>{
//     if(number[1]% number[0] === 0 || number[0]% number[1] === 0){
//         console.log('Sao Multiplos');
//     }else {
//         console.log('Nao sao Multiplos');
//     }
// };

// multiple(number);
