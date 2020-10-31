const CustomError = require("../extensions/custom-error");
module.exports = function repeater( str, options ) {

  str = "" + str;  
  var separator = options.separator ? options.separator : "+";
  var additionSeparator = options.additionSeparator ? options.additionSeparator : "+";


  if(options.addition !== undefined) {
  var addition = "" + options.addition;
    if(+options.additionRepeatTimes) {
      for(var i = 1; i < options.additionRepeatTimes; i++ ) {
        addition = addition + additionSeparator + options.addition;
      }
      str = str + addition;
    } else {
      str = str + addition;
    }
  }
  var answer = str;
  
  if(+options.repeatTimes) {
    for(var i = 1; i < options.repeatTimes; i++ ) {
      answer = answer + separator + str;
    }
  }

  return answer;
};
  