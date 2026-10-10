function getAverage(arr){
  let avg=0
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    avg=sum/arr.length
  
  }return avg
}

function getGrade(scr){
  if(scr==100){
    return "A+"
  }
  if(scr>=90 & scr<=99){
    return "A"
  }
  if(scr>=80 & scr<=89){
    return "B"
  }
  if(scr>=70 & scr<=79){
    return "C"
  }
  if(scr>=60 & scr<=69){
    return "D"
  }
  if(scr>=0 & scr<=59){
    return "F"
  }
}

function hasPassingGrade(scr){
  let grade=getGrade(scr)
  if(grade!="F"){
    return true
  }
  else{
    return false
  }
}

function studentMsg(arr, scr) {
  let avg = getAverage(arr);
  let grade = getGrade(scr);

  if (hasPassingGrade(scr)) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}
