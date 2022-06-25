//1. using object constructor.
let object = new Object();

//2. using object's create method. prototype object is the parameter.
let object2 = Object.create(null);

//3. object literal syntax
let object3 = {
  name: "amal",
  age: 27,
};

// 4. function constructor
function Person(name) {
  this.name = name;
  this.age = 32;
}

let object4 = new Person("Naveen");

// 5. function constructor with prototype.
function Person() {}
Person.prototype.name = "Sudheer";
let object5 = new Person();

// 6. with class
class Person {
  constructor(name) {
    this.name = name;
  }
}

let object6 = new Person("Tharun");

//7. singleton pattern

let object7 = new (function () {
  this.name = "John Doe";
})();
