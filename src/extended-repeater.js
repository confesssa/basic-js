const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str);

  function convert(arr, separator ) {
    if(separator === undefined) {
      return arr.join('+');
    }
    return arr.join(separator);
  }

  function createArr (str = '' , current = 1, separator ) {

    str = String(str);
    let createArrNew = [];
    for(let i = 0; i < current; i++) {
      createArrNew.push(str);
    }
    return convert(createArrNew, separator);
  }

  let newString = str + createArr(options.addition, options.additionRepeatTimes, options.additionSeparator);

  let resultString = createArr(newString, options.repeatTimes, options.separator );

  return resultString;

};
  