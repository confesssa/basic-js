const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!!date === false) {
    return 'Unable to determine the time of year!';
  } else if (date.getMonth) {
    let seasons = ['winter', 'spring', 'summer', 'autumn'];
    if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) {
      return seasons[0];
    } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
      return seasons[1];
    } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
      return seasons[2];
    } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
      return seasons[3];
    } {
      throw new RangeError;
    }

  } else {
    throw new RangeError(Error);
  }
};
