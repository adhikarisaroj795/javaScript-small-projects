//write a fucntion called poweroftwo that takes an integer num as
//input and return if num is a power of two, and false otherwise.

const powerOfTwo = (num) => {
  let op = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  //   return num > 0 && (num & (num - 1)) === 0;
  return op;
};

console.log(powerOfTwo(7));
