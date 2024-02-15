var input = require("fs").readFileSync("index.txt", "utf8");
var lines = input.split("\n");
// const age = () => {
//   const day = Number(lines[0]);
//   console.log(Math.ceil(1.1));
//   console.log(Math.floor(1.1));
//   console.log(800 % 30);
//   if (day >= 365) {
//     const years = Math.floor(day / 365);
//     const months = Math.floor((day % 365) / 30);
//     const days = day - years * 365 - months * 30;
//     console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
//   } else {
//     const years = 0;
//     const months = Math.floor(day / 30);
//     const days = day % 30;
//     console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
//   }
// };
// age();
var age = function () {
    var day = Number(lines[0]);
    if (day >= 365) {
        var years = Math.floor(day / 365);
        var months = Math.floor((day % 365) / 30);
        var days = (day % 365) - 30;
        console.log("".concat(years, " ano(s)\n").concat(months, " mes(es)\n").concat(days, " dia(s)"));
    }
    else {
        var years = 0;
        var months = Math.floor(day / 30);
        var days = day % 30;
        console.log("".concat(years, " ano(s)\n").concat(months, " mes(es)\n").concat(days, " dia(s)"));
    }
};
age();
