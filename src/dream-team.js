const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result1 = [];
  let result2 = [];
if (Array.isArray(members)) {

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      result1.push(members[i].trim());
    }
  };

  result1.forEach((element) => {
    result2.push(element[0].toUpperCase());
    });
  return result2.sort().join('');

} else {
  return false;
};
}
