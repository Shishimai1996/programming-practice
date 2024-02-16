//problem:  https://www.beecrowd.com.br/judge/en/problems/view/1234
import * as path from "path";

// Construct an absolute path to 'index.txt'
const filePath: string = path.join(__dirname, "index.txt");
var input = require("fs").readFileSync(filePath, "utf8");
// var lines = input.split('\n\r');

// This is a dancing sentence
//   This   is         a  dancing   sentence
// aaaaaaaaaaa
// z
// -->
// ThIs Is A dAnCiNg SeNtEnCe
//   ThIs   Is         A  dAnCiNg   SeNtEnCe
// AaAaAaAaAaA
// Z

/////

// pseudocode:

// set flag as true
// set empty array
// loop through the whole string:
// 	if( cahrater at index (i) is space ) -> solution.push(space);continue;
// 	if flag is true{
// 		const char=index (i) as uppercase
// 		solution.push(char);
// 		set flag as false
// 	}
// 	else{
// 		const char=index (i) as lowercase
// 		solution.push(char);
// 		set flag as true
// 	}

// This is a dancing
// char="I"
// solution ["T","h", "I", "s", " "]
// flag:=false
// i:=5
//
let flag = true;
let array: string[] = [];
let str = "";
// console.log(array);
// console.log(str);

for (let i = 0; i < input.length; i++) {
  if (input[i] == " ") {
    array.push(" ");
  } else if (flag == true) {
    const char = input[i].toUpperCase();
    // console.log(char);
    array.push(char);
    flag = false;
  } else {
    const char = input[i].toLowerCase();
    // console.log(char);
    array.push(char);
    flag = true;
  }
}

// console.log(array);
const result = array.join("");

console.log(result);
