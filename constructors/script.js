class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "saroj";

  constructor() {
    super();
    this.age = 30;
  }

  greet = () => {
    console.log("hi, i am " + this.name + "and i am " + this.age + "years old");
  };

  //   greet() {
  //     console.log("hi, i am " + this.name + "and i am " + this.age + "years old");
  //   }
}

// function Person() {
//   this.age = 30;
//   this.name = "max";
//   this.greet = function () {
//     console.log("hi, i am " + this.name + "and i am " + this.age + "years old");
//   };
// }
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();

// p.greet();
// p.printAge();

// console.log(p.__proto__);
// const p2 = p.__proto__.constructor();
// console.log(p.length);
// console.log(p.toString());
// console.dir(Object.prototype.__proto__);

const p = new Person();
console.log(p);

const btn = document.getElementById("btn");

btn.addEventListener("click", p.greet);
