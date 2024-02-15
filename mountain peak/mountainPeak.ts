const mountainPeak = () => {
  const lines = [3, 4, 5, 2, 1];
  const array = [];
  for (let i = 0; i < lines.length; i++) {
    if (i < lines.length - 1 && i > 0) {
      if (lines[0] > lines[1]) {
        array.push(0);
      } else if (lines[lines.length - 1] > lines[lines.length - 2]) {
        array.push(lines.length - 1);
      } else if (lines[i] < lines[i + 1] && lines[i - 1] < lines[i]) {
        array.push(i);
      } else array.push(-1);
    }
  }
  return array;
};
const result = mountainPeak();
console.log("result", result);
