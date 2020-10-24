const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15, 
      HALF_LIFE_PERIOD= 5730,
      COEFFICIENT= .693;

module.exports = function dateSample( sampleActivity ) {
  const num = Number.parseFloat(sampleActivity);
  if (typeof (sampleActivity) === 'string' && num > 0 && num <= MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / num) * (HALF_LIFE_PERIOD / COEFFICIENT));
  }
  return false;
};
