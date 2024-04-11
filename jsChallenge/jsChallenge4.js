//* write a function called checkTraingleType that takes three parameters
//* representing the lengths of the sides of a traingle. the function should
//* return string indicating the type of traingle: " equilaterals", " isosceles", or " scalene"

// if all three sides are of equal length, return "equilateral",
// two side are of equal length then return "isosceles"
// no side are of equal length then return "scalene"

const checkTraingleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || a === c || b === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTraingleType(3, 3, 3));
console.log(checkTraingleType(1, 5, 3));
console.log(checkTraingleType(9, 3, 3));
