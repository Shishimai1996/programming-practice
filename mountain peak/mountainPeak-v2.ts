const mountainPeakV2 = (mountain: number[]) => {
  const array: number[] = [];
  for (let i = 0; i < mountain.length; i++) {
    if (i == 0) {
      if (mountain[i] > mountain[i + 1]) {
        array.push(i);
      }
    } else if (i == mountain.length - 1) {
      if (mountain[i] > mountain[i - 1]) {
        array.push(i);
      }
    } else {
      if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
        array.push(i);
      }
    }
  }

  return array;
};

const x = [1, 3, 2, 6, 2]; // [1, 3]
const y = [1, 1, 1, 1];
const z = [6, 5];

const result2 = mountainPeakV2(z);
console.log(result2);
