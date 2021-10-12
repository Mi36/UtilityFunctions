const word = "abc";
console.log(word.slice(1));

const capitalize = (str) => {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};
console.log(capitalize("aa dgjs jsafgd"));
