/* write a function findmin that takes an array of numbers
 as input and returns the minimum value found in the array */

const findMin = (arr) => {
  const sorted = arr.sort((a, b) => a - b);

  return sorted[0];
};

console.log(findMin([10, 20, 30, 2]));
