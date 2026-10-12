function pairElement(str){
  let result=[]
  let letters= str.split("")
  for(let letter of letters){
    if(letter=="A"){
      result.push(["A","T"])
    }
    if(letter=="T"){
      result.push(["T", "A"])
    }
    if(letter=="G"){
      result.push(["G","C"])
    }
    if(letter=="C"){
      result.push(["C","G"])
    }
    
  }
  return result
}
