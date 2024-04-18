//* write a function arayEqual that takes two arrays arr1 and arr2
//* as input and returns true if the arrays are equal(ie. contain same elements in the same order),
// * and false otherwise.

const arrayAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((currEl, index) => currEl === arr2[index]);
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 5];
console.log(arrayAreEqual(arr1, arr2));
