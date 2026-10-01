const num=5;
function factorialCalculator(n){
  let result = 1
  while(n>0) {
    result = result*n
  
    n--
  }
  return result
}
const factorial = factorialCalculator(num)
console.log(`Factorial of ${num} is ${factorial}`)
