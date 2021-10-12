const pyramid = (n) => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair = stair + "*";
      } else {
        stair = stair + " ";
      }
    }
    console.log(stair);
  }
};
const pyramid = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2);
  console.log(midpoint, (2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (col < midpoint - row || col > midpoint + row) {
        stair = stair + " ";
      } else {
        stair = stair + "*";
      }
    }
    console.log(stair);
  }
};

pyramid(2);
