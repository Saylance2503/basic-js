const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }

  let st = options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    st = st + options.additionSeparator + options.addition;
  }

  let newSt = str + st;
  for (let i = 1; i < options.repeatTimes; i++) {
    newSt = newSt + options.separator + str + st;
  }
  return newSt;
};
  