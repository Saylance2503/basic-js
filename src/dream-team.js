const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(dreamTeam) {
  if (Array.isArray(dreamTeam)) {
    const firstName = name => name.trim().charAt(0).toUpperCase();
    return dreamTeam.filter(value => typeof value === 'string').map(firstName).sort().join('');
  } 
  return false;
};
