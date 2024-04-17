// to create folder => mkdir foldername
// to make filewith extension => echo. > helloworld.js
// to delete file => del helloworld.js

// * Calculate the average

// write a function called calculateAverage that takes an  array
// of numbers as input and returns the average of those numbers.

const calculateAverage = (arr) => {
  let number = arr;
  const result = number.reduce((accum, curVal) => curVal + accum, 0);
  const average = result / number.length;
  return average;
};

console.log(calculateAverage([5, 10, 2, 8]));
