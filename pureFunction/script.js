function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 20));
console.log(add(200, 30));

function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(10));

let prevResult = 0;

function addMoreNumber(num1, num2) {
  const sum = num1 + num2;
  prevResult = sum;
  return sum;
}

console.log(addMoreNumber(5, 10));

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.9);
const calulateIncomeTax = createTaxCalculator(0.5);

console.log(calculateVatAmount(100));
console.log(calulateIncomeTax(100));

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);
  // return n === 1 ? x : x * powerOf(x, n-1)
}

console.log(powerOf(2, 3));

const myself = {
  name: "max",
  friends: [
    {
      name: "saroj",
      friends: [
        {
          name: "chris",
        },
      ],
    },
    {
      name: "rahul",
    },
  ],
};
function printFriendsNames(person) {
  const collectedName = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedName.push(friend.name);
    collectedName.push(...printFriendsNames(friend));
  }
  return collectedName;
}

console.log(printFriendsNames(myself));
