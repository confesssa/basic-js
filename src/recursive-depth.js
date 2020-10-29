const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {

  calculateDepth(arr) {
    if (arr.some(function(el) {
      return Array.isArray(el);
    })) {
      return 1 + this.calculateDepth(arr.flat());
    } else {
      return 1;
    }
  }
};