// var foo = "bim";
// //                                ▼ this is a reference to variable foo, not his associated value ('bim')
// var getFoo = function () {
//   return foo;
// };
// foo = "boum";

// console.log(getFoo());

// //////////////////////////////
// console.log("////////////////////////");
// console.log(help);

// console.log("hello", i);
// for (var i = 0; i < 4; i++) {
//   (function (i) {
//     setTimeout(() => console.log(i), 0);
//   })(i);
// }
// console.log(help);

// var help = "hello";
// // console.log("hello", i);

// // var is function scoped or global scoped but not the block-scoped this means
// // they are accessible anywhere within the function or globally if declared outsuide the function
// // they can be redeclared and updated
// // variable declared with are are hoisted to the top of their fucntion of global scope,
// // meaning they are processed before the code is executed

// // let
// // variable declareed with let are block-scoped, meaning they are accessible only with in the block(enclosed by curly braces)
// // they can be updated but not re-declared within the same scope
// //variable declared with let are not hoisted to the top of their block,
// //which means they are not accessible before the line of code that initializes  them.

// //const
// //variables declared with const are also block-scoped like let
// // they cannot be updated or re-declared. once assigned, their value remains constant
// //throughout execution of the program

// // while playig with objects and arrays the reference to the data is constant  but not data
// // it means that we can modify the properties of object and arry declared with const

// console.log("////////////////////////");

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// ///////////////////
// let dog = {
//   name: "doggo",
//   sayName() {
//     console.log(this.name);
//   },
// };
// dog.sayName();
// // console.log(sayName);

// // dog.sayName();

// function cat(name) {
//   //CONSTRUCTOR FUNCTON
//   this.name = name;
//   this.bark = function () {
//     console.log(this.name + " says woof");
//   };
// }
// let fido = new cat("fido");
// fido.bark();

// //A constructor function in JavaScript is a special type of function that is
// //used to create and initialize objects of a certain type or class.

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function () {
//   console.log(this.name + " says woof");
// };
// let dido = new Dog("fido");
// dido.bark();

// ///////////////////
// console.log(5 == "5"); // Output: true (Equality operator performs type coercion)
// console.log(5 === "5"); // Output: false (Strict equality operator does not perform type coercion)

// function isBig(thing) {
//   if (thing == 0 || thing == 1 || thing == 2) {
//     return false;
//   }
//   return true;
// }
// isBig(0); // false
// isBig(3); // true

// isBig(1); // false
// ///////////////////////////////////////

// const heroes = [
//   { name: "Wolverine", family: "Marvel", isEvil: false },
//   { name: "Deadpool", family: "Marvel", isEvil: false },
//   { name: "Magneto", family: "Marvel", isEvil: true },
//   { name: "Charles Xavier", family: "Marvel", isEvil: false },
//   { name: "Batman", family: "DC Comics", isEvil: false },
//   { name: "Harley Quinn", family: "DC Comics", isEvil: true },
//   { name: "Legolas", family: "Tolkien", isEvil: false },
//   { name: "Gandalf", family: "Tolkien", isEvil: false },
//   { name: "Saruman", family: "Tolkien", isEvil: true },
// ];

// const newHeroes = heroes.map((h) => ({
//   ...h,
//   name: h.name.toUpperCase(),
// }));

// console.log(heroes);

// const characterAt = (a, n) => {
//   n = n - 1;
//   return a.charAt(n);
// };

// result = characterAt("hello, world", 1);

// console.log("res", result);

// const partialShow = (a) => {
//   return a.substring(2, 8);
// };

// console.log("partialshoew", partialShow("hellonepal"));

// const a = "helloworld";

// console.log("try", a.slice(5));

// const FirstThree = (str) => {
//   return str.slice(0, 3);
// };

// console.log("three", FirstThree("hello"));

// const newYear = "happynewyear";

// console.log(newYear.substring(0, 3));

// const b = "sting";
// console.log("index", b.indexOf("in"));

// const c = "hellow";

// const n = c.length / 2;
// console.log(c.slice(n));

// ////////////////////////////
// const concatination = (nums) => {
//   return nums.concat(nums);
// };

// const nums = [1, 2, 3, 4];

// const final = concatination(nums);

// console.log("concat", final);

// ///////////////////////////////////

// var buildArray = function (no) {
//   const ans = [];
//   for (let i = 0; i < no.length; i++) {
//     ans[i] = no[no[i]];
//   }
//   return ans;
// };

// const no = [6, 2, 1, 5, 0, 4];

// console.log(buildArray(no));

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var smallerNumbersThanCurrent = function (nums) {
//   const result = [];
//   for (i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (j = 0; j < nums.length; j++) {
//       if (i !== j && nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// };
// //////////////////////////////

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumDifference = function (nums) {
//   let difference = nums[0];
//   let maxDifference = -1;
//   for (i = 1; i < nums.length; i++) {
//     if (nums[i] > difference) {
//       maxDifference = Math.max(maxDifference, nums[i] - difference);
//     } else {
//       difference = nums[i];
//     }
//   }
//   return maxDifference;
// };

// /**
//  * @param {number[]} original
//  * @param {number} m
//  * @param {number} n
//  * @return {number[][]}
//  */
// var construct2DArray = function (original, m, n) {
//   const totalElements = original.length;
//   if (totalElements !== m * n) {
//     return [];
//   }

//   const result = [];
//   for (let i = 0; i < m; i++) {
//     const row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(original[i * n + j]);
//     }
//     result.push(row);
//   }

//   return result;
// };

// function removeVowels(str) {
//   // Define a regular expression to match vowels (case-insensitive)
//   const vowelsRegex = /[aeiou]/gi;

//   // Use the replace() method to remove vowels from the string
//   const result = str.replace(vowelsRegex, "");

//   // Return the modified string without vowels
//   return result;
// }

// // Example usage:
// const inputString = "Hello World";
// console.log("Input:", inputString);
// console.log("Output:", removeVowels(inputString)); // Output: Hll Wrld

// var defangIPaddr = function (address) {
//   const octets = address.split(".");

//   const defangedAddress = octets.join("[.]");
//   console.log(octets);

//   return defangedAddress;
// };

// console.log(defangIPaddr("1.1.1.1.1"));

// //////////////////////////////

// function numJewelsInStones(jewels, stones) {
//   // Initialize a counter to keep track of the number of jewels
//   let jewelCount = 0;

//   // Iterate through each stone in the stones array
//   for (let stone of stones) {
//     // Check if the stone is present in the jewels string
//     if (jewels.includes(stone)) {
//       // If it is, increment the jewel count
//       jewelCount++;
//     }
//   }

//   // Return the total number of jewels found
//   return jewelCount;
// }

// // Example usage:
// const jewels = "aA";
// const stones = "aAAbbbb";
// console.log("Number of jewels found:", numJewelsInStones(jewels, stones)); // Output: 3

// //////////////////////////////////////////////
// function twoSum(nums, target) {
//   // Create a map to store elements and their indices
//   const numIndices = new Map();

//   // Iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const complement = target - num;

//     // Check if the complement exists in the map
//     if (numIndices.has(complement)) {
//       // If found, return the indices of both elements
//       return [numIndices.get(complement), i];
//     }

//     // Otherwise, store the current element and its index in the map
//     numIndices.set(num, i);
//   }

//   // If no such pair is found, return null (or any appropriate value)
//   return null;
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1] (Indices of 2 and 7)

// ////////////////////////////////////
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   let str = x.toString();
//   const reversedString = str.split("").reverse().join("");
//   return str === reversedString;
// };

// ///////////////////////////////

// function translateParseltongue(input) {
//   // Regular expression to match Parseltongue words surrounded by parentheses
//   const parseltongueRegex = /\(([^)]+)\)/g;

//   // Replace Parseltongue words with their English translations
//   return input.replace(parseltongueRegex, (match, word) => {
//     // Sample translation mapping for demonstration purposes
//     const translations = {
//       ssss: "snake",
//       slytherin: "snake",
//       // Add more translations as needed
//     };

//     // Return the translated word or the original if not found in translations
//     return translations[word] || word;
//   });
// }

// // Test the function
// const inputString = "Hello (ssss) world (slytherin)!";
// const translatedString = translateParseltongue(inputString);
// console.log(translatedString); // Output: "Hello snake world snake!"

// /////////////////////////

// function swapQuadruplets(input) {
//   // Initialize an empty string to store the result
//   let result = "";

//   // Loop through the input string by increments of 4
//   for (let i = 0; i < input.length; i += 4) {
//     // Extract the current quadruplet substring
//     const quadruplet = input.substr(i, 4);

//     // Check if the quadruplet substring has exactly 4 characters
//     if (quadruplet.length === 4) {
//       // Swap the first and second characters with the third and fourth characters
//       const swapped =
//         quadruplet[2] + quadruplet[3] + quadruplet[0] + quadruplet[1];

//       // Append the swapped quadruplet to the result string
//       result += swapped;
//     } else {
//       // Append any remaining characters (less than 4) to the result string
//       result += quadruplet;
//     }
//   }

//   return result;
// }

// // Test the function
// const inputString = "abcdefghijkl";
// const swappedString = swapQuadruplets(inputString);
// console.log(swappedString); // Output: "cdabghiefkl"

// ///////////////////////////

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     minPrice = Math.min(minPrice, price);
//     maxProfit = Math.max(maxProfit, price - minPrice);
//   }

//   return maxProfit;
// }

//////////////////////////////////

/* interview Questions */

// write a function that return longest word in a string

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  // words = words.sort((a, b) => b.length - a.length);
  // console.log(words);
  // return words[0];
  // return words.at(-1);
  // return words.reduce((accum, curWord) =>
  //   curWord.length > accum.length ? curWord : accum
  // );

  return words.reduce((accum, curWord) => {
    console.log(`accum: ${accum}, curWord: ${curWord}`);
    return curWord.length > accum.length ? curWord : accum;
  }, "");
};

console.log(
  findLongestWord(
    "i am servernt of Lord Shiva who is supreme being heisneitherbornnorwillhedie"
  )
);
