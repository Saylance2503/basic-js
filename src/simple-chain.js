const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if (!position || typeof position !== 'number') {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainFinish = this.chain.join('~~');
    this.chain = [];
    return chainFinish;
  },
};

module.exports = chainMaker;
