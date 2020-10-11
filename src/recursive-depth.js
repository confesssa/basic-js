const CustomError = require("../extensions/custom-error");
let a;
let b;
let count;
module.exports = class DepthCalculator {


  calculateDepth(arr) {
    a = arr;
    b = a.flat();
    count = 1;
    if (Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])) {
return count;
} else {
count++;
return calculateDepth(b, b.flat());
};


  };
};