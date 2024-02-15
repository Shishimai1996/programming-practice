var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
var mountainPeak = function () {
    for (var i = 0; i < lines.length; i++) {
        if (i < lines.length - 1 && i > 0) {
            if (lines[i] < lines[i + 1] && lines[i - 1] < lines[i]) {
                console.log("Found at index:", i);
                return i;
            }
        }
        else {
            if (lines[0] > lines[1] && lines[0] > lines[lines.length - 1]) {
                console.log("Found at index: 0");
                return 0;
            }
            else if (i === lines.length - 1 &&
                lines[0] < lines[lines.length - 1] &&
                lines[lines.length - 2] > lines[lines.length - 1]) {
                console.log("Found at index:", lines.length - 1);
                return lines.length - 1;
            }
        }
    }
    console.log("Pattern not found.");
    return -1;
};
console.log("hah");
