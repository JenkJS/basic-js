module.exports = function getSeason( date ) {
  if(date === undefined) {
   return "Unable to determine the time of year!";
  }
   if(date && !date.getMonth() && date.getMonth() !== 0) {
    throw Error;
   }
 
   try {
    date.getUTCDate();
  }
  catch(error) {
    throw Error;
  }
 
   var month;
   var number = date.getMonth();
   if (number < 2 || number > 10) {
      month = "winter" 
  } else if (number < 5) {
      month = "spring"
  } else if (number < 8) {
      month = "summer"
  } else {
   month = "autumn"
  }
  return month;
 };