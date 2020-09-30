const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new RangeError;
  } else if (arr.length === 0) {
    return [];
  } else {
    // let result = arr.slice();
    // for (let i = 0; i < arr.length; i++) {
    //   if (typeof(result[i]) === 'number') {
    //     result.push(arr[i]);
    //   } else if (result[i] === '--discard-next') {
    //     result.splice(i + 1, 1)
    //   } else if (result[i] === '--discard-prev') {
    //     result.splice(i - 1, 1);
    //   }
    // }
    
  }
};
