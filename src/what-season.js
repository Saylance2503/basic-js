const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  if (date instanceof Date && date.toDateString()) {
    if (month < 2 || month == 11) {
    return "winter"
    }
    if (month >= 2 && month < 5) {
      return "spring"
    }
    if (month >= 5 && month < 8) {
      return "summer"
    }
    if (month >= 8 && month < 11) {
      return "autumn"
    }
    else {
      throw new Error('THROWN');
    }
  }
};