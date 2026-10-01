function findLongestWordLength(str) {
  const sen = str.trim();
  const words = sen.split(/\s+/);
  let count = 0;

  for (const word of words) {
    if (word.length > count) {
      count = word.length;
    }
  }

  return count;
}
