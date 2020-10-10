const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new RangeError;
  } else if (arr.length === 0) {
    return [];
  } else {

    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
    if (arr[i - 1] !== '--discard-next') {
    result.push(arr[i]);
    } else {
    result.push('');
    }
    } else if (arr[i] === '--double-next') {
    if (arr.indexOf('--double-next')  === (arr.length - 1)) {
    result[i] = ''; // возможно нужно будет изменить
    } else {
    result[i] = arr[i + 1];
    };
    } else if (arr[i] === '--double-prev') {
    if (arr.indexOf('--double-prev')  === 0) {
    result[i] = '';
    } else {
    result[i] = arr[i - 1];
    };
    }  else if (arr[i] === '--discard-prev') {
    if (arr.indexOf('--discard-prev')  === 0) {
    result[i] = '';
    } else {
    result = result.slice(0, -1);
    };
    } else if (arr[i] === '--discard-next') {
    result[i] = '';
    } 
    }// конец цикла
    
    
    
    let result2 = result.filter(function(el) {
    return typeof el === 'number';
    }); 
    
    
return result2;
  }
};
