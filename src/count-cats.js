const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(ears) {
  const cats = ears.flat().filter(el => el === '^^');
  return cats.length;
};