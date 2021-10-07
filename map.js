const string = "hello";
const chars = {};
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}

const a = {
  item: 2,
};
console.log(a["item"]);
a["item2"] = 25;
console.log(a);
