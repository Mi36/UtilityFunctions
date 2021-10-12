const map = (str) => {
  const obj = {};
  for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;
  return obj;
};

const anagram = (str1, str2) => {
  const mappedStr1 = map(str1);
  const mappedStr2 = map(str2);

  if (Object.keys(mappedStr1).length !== Object.keys(mappedStr2).length) {
    return false;
  }
  for (let char in mappedStr1) {
    if (mappedStr1[char] !== mappedStr2[char]) {
      return false;
    }
  }
  return true;
};

console.log(anagram("aaio", "ioaa"));
