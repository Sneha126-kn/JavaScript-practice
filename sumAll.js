function sumAll(arr){
  
  let sum=0
  let start = Math.min(arr[0], arr[1])
  let end = Math.max(arr[0], arr[1])
  if(arr.length==2){
    while(start<=end){
      sum+=start
      start=start+1
    }
  }return sum
}
