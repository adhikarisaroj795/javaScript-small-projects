//  write a funciton that takes a string as input and returns the count of vowels in the string
//  consider "a", "e", "i", "o" and "u" as vowels (both lowercase and uppercase)

const vowelCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const str1 = str.toLowerCase().split("");
  for (let i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i])) {
      count++;
    }
  }

  return count;
};

console.log(vowelCount("hello world"));

const vowCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const strArr = str.toLowerCase().split("");

  for (let char of strArr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(vowCount("hello world"));
