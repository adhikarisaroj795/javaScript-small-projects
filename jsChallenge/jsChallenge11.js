//* write a function that takes a number as input and returns the sum of its digits.
const sumOfNo = (num) => {
  let arr = Array.from(num.toString(), Number);

  const res = arr.reduce((accum, curVal) => (accum = accum + curVal), 0);
  return res;
};

console.log(sumOfNo(123456));
