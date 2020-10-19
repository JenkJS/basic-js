const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
     return matrix.flat().reduce( (acc, item) => acc + (item === '^^'), 0);
  
};