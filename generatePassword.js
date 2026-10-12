function generatePassword(len){
  let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let pass=""
  for(let i=0;i<len;i++){
    let randomIndex = Math.floor(Math.random() * chars.length);
    let randomChar = chars[randomIndex];
    pass+=randomChar
  }return pass
}

let password= generatePassword(4)
console.log(`Generated password: ${password}`)
