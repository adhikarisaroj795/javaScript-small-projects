//* write a function to sort an array of numbers in ascending order

const sortAscending = (arr) => {
  //   return arr.sort((a, b) => a - b);
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

unsorted = [5, 2, 10, 15, 20, 7, 2, 6, 20];
console.log(sortAscending(unsorted));
