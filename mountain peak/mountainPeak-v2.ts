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
