// problem:
// Finds the peak index in an array of integers representing the heights of mountains.
// A mountain is considered a peak if its height is greater than its neighboring mountains.
// The first and last mountains in the array are compared to their single adjacent mountain.

// @param heights: The array of mountain heights.
// @return: The index of the peak mountain, or -1 if no peak is found.

// public static int findPeakIndex(int[] heights) {
// return -1; // return -1 if no peak is found
// }
// Public static void main(String[] args) {
//  int[] heights = {1,3,5,2,1};
//  int[] peakIndex = findPeakIndex(heights);
// System.out.printIn(“Peak index:” + peakIndex); // Peak index:2
// }

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
