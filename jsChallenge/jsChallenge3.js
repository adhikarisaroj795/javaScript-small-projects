//* write a function called countchar that takes two
//* parameters: a string and a character to count. the function should return the
//* number of times the specified character appears

const countChar = (str, cha) => {
  let count = 0;
  const lowerStr = str.toLowerCase();
  const lowerCha = cha.toLowerCase();

  //   for (let i = 0; i < lowerStr.length; i++) {
  //     if (lowerStr[i] === lowerCha) {
  //       count++;
  //     }
  //   }
  totalCount = lowerStr.split("").reduce((accum, curChar) => {
    if (curChar === lowerCha) {
      accum++;
    }
    return accum;
  }, 0);
  return totalCount;
};
str = "my name is hero i Am most poweful In unverse";
cha = "i";
console.log(countChar(str, cha));

// *we  cannot use reduce in string so convert o array

// the function should be case-sensitive
// the function should handle both lowercase and uppercase characters
// the chatacter parameter can bee any printable ASCI characters

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log("accum", accumulator, "val", currentValue);
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
