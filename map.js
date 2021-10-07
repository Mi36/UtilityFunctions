const string = "hello";
const chars = {};
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}
