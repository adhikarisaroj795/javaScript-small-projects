/*Write a fuction to calculate the sum of the squares
 of all elements in an array for example given in array
 [1,2,3]  the function should return 14 because 1*1 +2*2 + 3*3 = 1 +
 4 + 9 = 14*/

const calculateSum = (arr) => {
  //   const sum = arr.reduce((accum, curVal) => (accum = accum + curVal * curVal));
  //   return sum;
  let sum = 0;
  for (let elem of arr) {
    sum = sum + elem * elem;
  }
  return sum;
};

console.log(calculateSum([1, 2, 3]));

const brokenKeyword = (brokenLetters, text) => {
  const words = text.split(" "); // Split the text into an array of words

  const fullyTypedWords = words.filter((word) => {
    return !brokenLetters.split("").some((letter) => word.includes(letter));
  });

  return fullyTypedWords.length;
};

console.log(brokenKeyword("wd", "hello world")); // Output: 0
