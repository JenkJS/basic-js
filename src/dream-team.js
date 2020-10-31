const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
   return false;
  }
   var answer = [];
   members.forEach(i => {
    if(typeof i === 'string') {
     answer.push(i.trim()[0].toUpperCase());
    }   
   })
   return answer.sort().join("");
 };
