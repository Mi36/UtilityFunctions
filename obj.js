const obj = {
  sub1: { mark: 25 },
  sub2: { mark: 26 },
  sub3: { mark: 27 },
  sub4: { mark: 28 },
};
let a = 0;
for (let x in obj) {
  console.log(x, obj[x].mark);
  a = a + obj[x].mark;
}
console.log(a);
