const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value === undefined) {
    this.array.push(`( )`) ;
     } else {
    this.array.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position < this.array.length) {
      this.array.splice(position - 1, 1);
      return this;
    } else {
      this.array = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
