var mountainPeakV2 = function (mountain) {
    var array = [];
    for (var i = 0; i < mountain.length; i++) {
        if (i == 0) {
            if (mountain[i] > mountain[i + 1]) {
                array.push(i);
            }
        }
        else if (i == mountain.length - 1) {
            if (mountain[i] > mountain[i - 1]) {
                array.push(i);
            }
        }
        else {
            if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
                array.push(i);
            }
        }
    }
    return array;
};
var x = [1, 3, 2, 6, 2]; // [1, 3]
var y = [1, 1, 1, 1];
var z = [6, 5];
var result2 = mountainPeakV2(z);
console.log(result2);
