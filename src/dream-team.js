const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }   
  let dreamTeamName = [];
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string' && members[i] !== 0) {
        dreamTeamName.push(members[i].trim()[0].toUpperCase());
      } 
  }
  
  return dreamTeamName.sort().join('');

};
