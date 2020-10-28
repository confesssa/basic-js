const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns =  Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(3600 / turnsSpeed * (Math.pow(2, disksNumber) - 1));
    let result = {};
    result.turns = turns;
    result.seconds = seconds;

  
    return result;
  
};
