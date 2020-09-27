const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//   if (Array.isArray(members)) {
//     let sum = []; // вопрос
//     for (let i = 0; i < members.length; i++) {
//       if (typeof(members[i]) === 'string') {
//         sum.push(members[i]);
//       };
//     };
//     sum.sort();

//     let result = [];
//     for (let i = 0; i < result.length; i++) {
//       let item = sum[i].trim();
//       result.push(item);
//     }
//     return String(result).toUpperCase;
//   } else {
//     return false;
//   }
// };

if (Array.isArray(members)) {
  let result1 = [];
  for (let i=0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      result1.push(members[i].trim());
    }
  };
  let result2 = [];
  for (let j=0; j < result1.length; j++ ) {
    result2.push(result1[j][0]);
  }
  return String(result2.sort().join('')).toUpperCase();

} else {
  return false;
};
}
