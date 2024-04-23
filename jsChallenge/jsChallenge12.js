// write a function that takes an aray of integers as input and removes
//ay duplicate elements, returning a new array with only unique elements

const removeDuplicate = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
};
console.log(removeDuplicate([1, 2, 1, 3, 3, 4, 5, 6]));
console.log(removeDuplicate([8, 9, 8, 10, 1, 2, 1]));

const rmvDuplicate = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(rmvDuplicate([1, 2, 1, 3, 3, 4, 5, 6]));
