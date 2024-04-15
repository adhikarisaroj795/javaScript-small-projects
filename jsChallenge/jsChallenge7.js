//* write a function findmax that takes an array of numners as input
//* and returns the maximmum number in array;

const findMax = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let maxx = sorted.reverse();
  let maxxNum = maxx[0];
  let maxNum = sorted[sorted.length - 1];
  console.log(maxxNum);
};

const data = [-10, -1000, 200, 20, 5, 3, 100, 2];
console.log(findMax(data));

const maxNum = () => {};
