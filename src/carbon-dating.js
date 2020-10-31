const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( SAMPLE_ACTIVITY ) {
  if(typeof SAMPLE_ACTIVITY === "string" && parseFloat(SAMPLE_ACTIVITY)) {
  	SAMPLE_ACTIVITY = parseFloat(SAMPLE_ACTIVITY);
  } else {
  	return false;
  }
  if(SAMPLE_ACTIVITY <= 0 || SAMPLE_ACTIVITY >= MODERN_ACTIVITY) {
  	return false;
  }

  const CONSTANT_DECAY = 0.693 /HALF_LIFE_PERIOD;

  return  Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)/CONSTANT_DECAY);
};
