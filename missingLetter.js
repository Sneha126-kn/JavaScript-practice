function fearNotLetter(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  let start = alpha.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (alpha[start + i] !== str[i]) {
      return alpha[start + i];
    }
  }

  return undefined;
}
