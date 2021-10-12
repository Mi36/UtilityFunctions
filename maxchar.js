const maxchar = (str) => {
  let maxChar = 0;
  let charecter = "";
  const charmap = {};
  for (let char of str) {
    if (!charmap[char]) {
      charmap[char] = 1;
    } else {
      charmap[char]++;
    }
  }
  for (let max in charmap) {
    if (charmap[max] > maxChar) {
      maxChar = charmap[max];
      charecter = max;
    }
  }
  return { maxChar, charecter };
};
console.log(maxchar("qwwejkhgjro"));
