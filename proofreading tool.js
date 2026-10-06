function isPalindrome(word){
  word=word.toLowerCase()
  const n = word.length;
  const mid=n/2;
  const sep=word.split("");

  for(let i=0;i<=mid;i++){
    if(sep[i]!==sep[n-(i+1)]){
      return false
    }

  }
  return true
}

function findPalindromeBreaks(words){
  const result=[]
  if(words.length===0){
    return []
  }
  else{
    for(let i=0;i<words.length;i++){
      if(!isPalindrome(words[i])){
          result.push(i)
      }
    }
  }return result
}

function findRepeatedPhrases(words, phraseLength) {
  const result = [];

  if (phraseLength >= words.length) {
    return result;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase1 = words.slice(i, i + phraseLength);

    for (let j = i + 1; j <= words.length - phraseLength; j++) {
      const phrase2 = words.slice(j, j + phraseLength);

      const same = phrase1.every((word, index) => word === phrase2[index]);

      if (same) {
        if (!result.includes(i)) {
          result.push(i);
        }

        if (!result.includes(j)) {
          result.push(j);
        }
      }
    }
  }

  return result;
}

function analyzeTexts(texts,phraseLength){
  const result=[]


    if(texts.length===0){
      return []
    }

    for(const words of texts){
     const repeatedPhrases = findRepeatedPhrases(words,   phraseLength);
     const palindromeBreaks = findPalindromeBreaks(words);

    result.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }
