const year=2000;
function isLeapYear(yea){
  if (yea%400===0){
    return yea+" is a leap year."
  }
  else if (yea%100===0){
    return yea+" is not a leap year."
  }
  else if (yea%4===0){
    return yea+" is a leap year."
  }
  else{
    return yea+" is not a leap year."
  }
}
const result=isLeapYear(year)
console.log(result)
