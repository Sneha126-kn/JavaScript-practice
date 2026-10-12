function uniteUnique(...arrays){
  let result=[]
  for (let arr of arrays){
    for(let num of arr){
      if(!result.includes(num)){
        result.push(num)
      }
    }
  }return result
}
