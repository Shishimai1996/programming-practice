var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");

console.log(lines);

const array = lines[0].split(" ").map(Number);
console.log(array);
console.log(array[0]);

const sum = (a, b) => a + b;

const test = (array) => {
  if (
    array[1] > array[2] &&
    array[3] > array[0] &&
    sum(array[2], array[3]) > sum(array[0], array[1]) &&
    array[2] > 0 &&
    array[3] > 0 &&
    array[0] % 2 === 0
  ) {
    console.log(`Valores aceitos`);
  } else {
    console.log(`Valores nao aceitos`);
  }
};
test(array);
