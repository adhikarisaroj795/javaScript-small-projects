//* Write a function factorial that takes a non-negative integer num as input and returns
//* its factorial. the factorial of a non-negative integer n, denoted as n!, is
//* the product of all positive integers less than or equal to n. the factorial of 0 is defined as 1

const findFactorial = (num) => {
  const number = [];
  if (num < 0) {
    const warning = "please enter positive number";
    return warning;
  }
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    number.push(i);
  }
  const result = number.reduce((accum, curVal) => accum * curVal);
  console.log(result);
};
// console.log(findFactorial(9));

const facto = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
console.log("fact", facto(8));

//5 = 5*4*3*2*1
